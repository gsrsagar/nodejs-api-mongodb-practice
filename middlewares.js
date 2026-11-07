function logger(req, res, next) {
  console.log("Request received:" + new Date().toISOString());
  console.log("Request received:");
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.url}`);
  console.log(`Body: ${JSON.stringify(req?.body)}`);
  console.log(`${req.method} ${req.url}`);
  next();
}

function ipMiddleare(req, res, next) {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  console.log(`IP Address: ${ip}`);
  next();
}

module.exports = { logger, ipMiddleare };
