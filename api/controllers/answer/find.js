/*
 * GET /v1/answers
 */

module.exports = {
  friendlyName: 'Answer list',
  description: 'Answer list',
  inputs: {
    page: {
      type: 'number',
      description: 'Page number.',
      defaultsTo: 1,
      isInteger: true,
      min: 1,
      max: Number.MAX_SAFE_INTEGER
    },
    limit: {
      type: 'number',
      description: 'Number of item per page.',
      defaultsTo: 10,
      isInteger: true,
      min: 4,
      max: Number.MAX_SAFE_INTEGER
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
    const skip = (inputs.page - 1) * inputs.limit;
    const query = {};

    const total = await Answer.count(query);
    const meta = {
      total: total,
      page: inputs.page,
      limit: inputs.limit
    };

    const answers = await Answer.find(query)
      .limit(inputs.limit)
      .skip(skip);
    return exits.list({ data: answers, meta });
  }
};
