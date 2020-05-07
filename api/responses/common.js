/**
 * common.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.common();
 *     // -or-
 *     return res.common(params);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'common'
 *       }
 *     }
 * ```
 *
 * ```
 *     throw 'somethingHappened';
 *     // -or-
 *     throw { somethingHappened: params }
 * ```
 */

module.exports = function common (params) {
  // let req = this.req;
  const res = this.res;
  const code = params.statusCode || 200;
  const data = (params.data) ? params.data : params;
  const type = _.isArray(data) ? 'LIST' : 'OBJECT';
  const status = code >= 400 ? 'FAILURE' : 'SUCCESS';
  const json = {
    status,
    type: status === 'FAILURE' ? 'ERROR' : type,
    data
  };
  if (params.meta) json.meta = params.meta;
  return res.status(code).json(json);
};
