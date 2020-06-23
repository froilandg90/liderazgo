/*
 * PUT /v1/questions/:id
 */

module.exports = {
  friendlyName: 'Update Question',
  description: 'Update Question',
  inputs: {
    id: {
      type: 'string',
      description: 'Question identifier.',
      required: true
    },
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
    const question = await Question.findOne({ id: inputs.id });
    if (!question) {
      return exits.errorFormat(20000);
    }

    const updated = await Question.updateOne({ id: inputs.id }).set({ text: inputs.text });
    return exits.obj({ data: updated });
  }
};
