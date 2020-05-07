/**
 * api/responses/errorFormat.js
 *
 * This will be available in controllers as res.errorFormat(10057);
 */

module.exports = function (code, data, options) {
  // let req = this.req;
  const res = this.res;
  const req = this.req;
  const sails = req._sails;

  let errorObject = sails.services.errorservice(code, options);
  res.type('application/problem+json');
  errorObject = Object.assign(errorObject, data);

  const username = (_.isNull(this.req.user) || _.isUndefined(this.req.user)) ? 'no user logged in' : this.req.user.username;
  sails.log.info('***************************ERROR FORMAT RESPONSE**********************');
  sails.log.info('* LOGGED USER: ' + username);
  sails.log.info('* ERROR ' + errorObject.code + ': ' + errorObject.description);
  sails.log.info('**********************************************************************');
  return res.common({ statusCode: errorObject.status, data: errorObject });
  // return res.status(errorObject.status).json(errorObject);
};
