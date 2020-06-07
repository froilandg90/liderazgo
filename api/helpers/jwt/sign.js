const jwt = require('jsonwebtoken');

module.exports = {
  friendlyName: 'Generate a jwt',
  description: 'Generate a jwt.',
  inputs: {
    payload: {
      type: 'json',
      description: 'Payload.',
      required: true
    }
  },
  fn: async function (inputs, exits) {
    const token = jwt.sign({ data: inputs.payload }, sails.config.custom.secret, { expiresIn: 86400 });
    return exits.success(token);
  }
};
