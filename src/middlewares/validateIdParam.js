function validateIdParam(paramName) {
  return (req, res, next) => {
    const v = req.params[paramName];
    if (!v || typeof v !== "string" || v.trim() === "") {
      return res.status(400).type("text").send(`Invalid ${paramName}`);
    }
    next();
  };
}

module.exports = { validateIdParam };