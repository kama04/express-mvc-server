const router = require("express").Router();

const {
  getUsers,
  postUsers,
  getUserById,
  putUserById,
  deleteUserById
} = require("../controllers/users.controller");

const { basicAuth } = require("../middlewares/basicAuth");
const { validateUserPayload } = require("../middlewares/validateUserPayload");
const { validateIdParam } = require("../middlewares/validateIdParam");

router.get("/", getUsers);
router.get("/:userId", validateIdParam("userId"), getUserById);

router.post("/", basicAuth, validateUserPayload, postUsers);
router.put("/:userId", basicAuth, validateIdParam("userId"), validateUserPayload, putUserById);
router.delete("/:userId", basicAuth, validateIdParam("userId"), deleteUserById);

module.exports = router;