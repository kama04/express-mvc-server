function getRoot(req, res) {
  res.status(200).json({ message: 'Welcome to the Express MVC Server!' });
}

module.exports = {
  getRoot,
};