const router = require('express').Router();

const { requestLogger } = require("../middlewares/requestLogger");

const { getRoot } = require("../controllers/root.controller");

router.get("/", requestLogger, getRoot);

module.exports = router;