function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).type("text").send("Internal server error");
}

module.exports = { errorHandler };