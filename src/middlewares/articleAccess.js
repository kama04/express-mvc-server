function articleAccess(req, res, next) {
  const role = (req.headers["x-article-role"] || "").toString().toLowerCase();
  if (role !== "editor" && role !== "admin") {
    return res.status(403).type("text").send("Forbidden. You do not have access to articles.");
  }
  next();
}

module.exports = { articleAccess };