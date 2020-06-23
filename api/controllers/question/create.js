/*
 * POST /v1/questions
 */

module.exports = {
  friendlyName: 'Create Question',
  description: 'Create Question',
  inputs: {
    text: {
      type: 'string',
      description: 'Question text.',
      required: true
    }
  },
  exits: {
    obj: {
      responseType: 'common'
    },
    errorFormat: {
      responseType: 'errorFormat'
    },
    serverError: {
      responseType: 'serverError'
    }
  },
  fn: async function (inputs, exits) {
    const question = await Question.create(inputs).fetch();
    return exits.obj({ status: 201, data: question });
  }
};
