const router = require('express').Router();

const { getRoot } = require("../controllers/root.controller");

router.get('/', getRoot);

module.exports = router;