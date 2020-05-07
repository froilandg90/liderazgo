module.exports = function (code, options) {
  const errorsUlr = 'https://developers.globoshop.com/api/errors/';
  if (!options) { options = {}; }

  var errorsList = {
    /** *****************************  GENERIC  *****************************************/
    10001: {
      error: 'E_UNAUTHORIZED',
      code: code,
      summary: 'Unauthorized',
      description: 'Missing token.',
      link: errorsUlr + code,
      status: 401
    },
    10002: {
      error: 'E_NOT_FOUND',
      code: code,
      summary: 'Resource not found',
      description: 'The email does not exist.',
      link: errorsUlr + code,
      status: 404
    },
    10003: {
      error: 'E_CONFLICT',
      code: code,
      summary: 'Conflicts',
      description: 'Wrong password.',
      link: errorsUlr + code,
      status: 409
    },
    10004: {
      error: 'E_UNAUTHORIZED',
      code: code,
      summary: 'Unauthorized',
      description: 'Wrong authorization header format. Format is Authorization: Bearer [token].',
      link: errorsUlr + code,
      status: 401
    },
    10005: {
      error: 'E_UNAUTHORIZED',
      code: code,
      summary: 'Unauthorized',
      description: 'Invalid token.',
      link: errorsUlr + code,
      status: 401
    }
  };
  return (!_.isUndefined(errorsList[code])) ? errorsList[code] : {
    error: 'E_SERVER_ERROR',
    code: 10000,
    summary: 'Error code is not implemented yet',
    description: `The error code ${code} does not exist`,
    link: errorsUlr + 10000,
    status: 501
  };
};
