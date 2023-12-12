function badRequest(statusCode, message) {
  return {
    statusCode: statusCode,
    body: message,
  };
}

function ok(statusCode, body) {
  return {
    statusCode: statusCode,
    body: body,
  };
}

module.exports = { badRequest, ok };
