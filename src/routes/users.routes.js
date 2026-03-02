const router = require('express').Router();
const {
    getUsers,
    postUsers,
    getUserById,
    putUserById,
    deleteUserById,
} = require("../controllers/users.controller");
const { basicAuth } = require("../middlewares/basicAuth");
const { validateUserPayload } = require("../middlewares/validateUserPayload");
const { validateIdParam } = require("../middlewares/validateIdParam");

router.use(basicAuth);

router.get("/", getUsers);
router.post("/", validateUserPayload, postUsers);

router.get("/:userId", validateIdParam("userId"), getUserById);
router.put("/:userId", validateIdParam("userId"), validateUserPayload, putUserById);
router.delete("/:userId", validateIdParam("userId"), deleteUserById);

module.exports = router;