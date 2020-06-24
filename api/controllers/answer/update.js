/*
 * PUT /v1/answers/:id
 */

module.exports = {
  friendlyName: 'Update answer',
  description: 'Update an answer',
  inputs: {
    id: {
      type: 'string',
      description: 'Answer identifier.',
      required: true,
    },
    value: {
      type: 'number',
      description: 'Answer value.',
      required: true,
      isInteger: true,
      isIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  exits: {
    list: {
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
    const answer = await Answer.findOne({ id: inputs.id });
    if (!answer) {
      return exits.errorFormat(0);
    }

    const updated = await Answer.updateOne({ id: inputs.id }).set({ answer: inputs.value });
    return exits.list({ data: updated });
  }
};
