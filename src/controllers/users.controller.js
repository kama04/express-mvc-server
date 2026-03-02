const users = [
  { id: "1", username: "alice", role: "user" },
  { id: "2", username: "bob", role: "admin" },
  { id: "3", username: "camila", role: "editor" }
];

function getUsers(req, res) {
    res.render("users/index.pug", { title: "Users", users });
}

function postUsers(req, res) {
  res.type("text").send("Post users route");
}

function getUserById(req, res) {
  const { userId } = req.params;
  const user = users.find(u => u.id === userId);

  if (!user) return res.status(404).type("text").send("User not found");
  res.render("users/detail.pug", { title: `User ${userId}`, user });
}

function putUserById(req, res) {
  const { userId } = req.params;
  res.type("text").send(`Put user by Id route: ${userId}`);
}

function deleteUserById(req, res) {
  const { userId } = req.params;
  res.type("text").send(`Delete user by Id route: ${userId}`);
}

module.exports = {
  getUsers,
  postUsers,
  getUserById,
  putUserById,
  deleteUserById
};