/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  // AuthController
  'POST /v1/auth/token': { action: 'auth/token' },
  'GET /v1/questions': { action: 'question/find' },
  'GET /v1/answer': { action: 'answer/find' },
  'POST /v1/answer': { action: 'answer/create' }
};
