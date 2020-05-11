module.exports = function (code, options) {
  const errorsUlr = 'https://developers.globoshop.com/api/errors/';
  if (!options) { options = {}; }

  var errorsList = {
    /** *****************************  GENERIC  *****************************************/
    // Answer Errors
    20000: {
      error: 'E_CONFLICT',
      code: code,
      summary: 'Answer can not be created.',
      description: 'Wrong question identifier.',
      link: errorsUlr + code,
      status: 409
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
