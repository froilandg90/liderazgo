module.exports = async function (req, res, next) {
  let token;

  // Check if authorization header is present
  if (req.headers && req.headers.api_token) {
    // authorization header is present
    const parts = req.headers.api_token.split(' ');
    if (parts.length === 2) {
      const scheme = parts[0];
      const credentials = parts[1];
      if (/^Bearer$/i.test(scheme)) { token = credentials; }
    } else {
      return res.errorFormat(10004);
    }
  } else {
    return res.errorFormat(10001);
  }

  await sails.helpers.jwt.verify(token, (err, decoded) => {
    if (err) return res.errorFormat(10005);
    req.user = decoded.data;
    return next();
  });
};
