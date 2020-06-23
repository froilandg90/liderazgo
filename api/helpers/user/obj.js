module.exports = {
  friendlyName: 'Serialize user',
  description: 'Serialize an user.',
  inputs: {
    user: {
      type: 'json',
      description: 'User object.',
      required: true
    },
    options: {
      type: 'json',
      description: 'Serialize options.',
      defaultsTo: {}
    }
  },
  fn: async function (inputs, exits) {
    delete inputs.user.password;
    const user = {
      id: inputs.user.id,
      fullName: inputs.user.fullName,
      email: inputs.user.email
    };
    if (inputs.options.lite === true) {
      return exits.success(user);
    }

    // user.settings = await Settings.findOne({ id: inputs.user.settings });
    return exits.success(user);
  }
};
