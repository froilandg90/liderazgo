/*
 * POST /v1/answers
 */

module.exports = {
  friendlyName: 'Create answer',
  description: 'Create an answer',
  inputs: {
    questionId: {
      type: 'string',
      description: 'Question identifier.',
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
    const question = await Question.findOne({ id: inputs.questionId });
    if (!question) {
      return exits.errorFormat(20000);
    }

    const created = await Answer.create({ answer: inputs.value, question: inputs.questionId }).fetch();
    return exits.list({ data: created });
  }
};
