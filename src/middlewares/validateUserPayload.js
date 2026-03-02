function validateUserPayload(req, res, next) {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).type("text").send("Missing required fields: username and password");
  }
  next();
}

module.exports = { validateUserPayload };