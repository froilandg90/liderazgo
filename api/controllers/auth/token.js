/*
 * /v1/auth/token
 */

module.exports = {
  friendlyName: 'Generate auth token',
  description: 'Generate an auth token based on the user credentials',
  inputs: {
    email: {
      type: 'string',
      description: 'email.',
      required: true
    },
    password: {
      type: 'string',
      description: 'password.',
      required: true
    }
  },
  exits: {
    obj: {
      responseType: 'common'
    },
    errorFormat: {
      responseType: 'errorFormat'
    }
  },
  fn: async function (inputs, exits) {
    const user = await User.findOne({ email: inputs.email });
    if (!user) return exits.errorFormat(10002);

    try {
      await sails.helpers.passwords.checkPassword(inputs.password, user.password);
    } catch (e) {
      return exits.errorFormat(10003);
    }
    const userSer = await sails.helpers.user.obj(user.toJSON(), { lite: true });
    const data = {
      auth: { access_token: await sails.helpers.jwt.sign(userSer) },
      user: user
    };
    return exits.obj(data);
  }
};
