const router = require("express").Router();
const {
    getArticles,
    postArticles,
    getArticleById,
    putArticleById,
    deleteArticleById
}= require("../controllers/articles.controller");

const { articleAccess } = require("../middlewares/articleAccess");
const { validateIdParam } = require("../middlewares/validateIdParam");

router.use(articleAccess);

router.get("/", getArticles);
router.post("/", postArticles);

router.get("/:articleId", validateIdParam("articleId"), getArticleById);
router.put("/:articleId", validateIdParam("articleId"), putArticleById);
router.delete("/:articleId", validateIdParam("articleId"), deleteArticleById);

module.exports = router;