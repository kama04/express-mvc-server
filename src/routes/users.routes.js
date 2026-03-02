const router = require('express').Router();
const {
    getUsers,
    postUsers,
    getUserById,
    putUserById,
    deleteUserById,
} = require("../controllers/users.controller");
router.get('/', getUsers);
router.post('/', postUsers);
router.get('/:id', getUserById);
router.put('/:id', putUserById);
router.delete('/:id', deleteUserById);

module.exports = router;