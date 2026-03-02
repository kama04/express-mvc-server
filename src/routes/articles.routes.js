const router = require("express").Router();

const {
  getArticles,
  postArticles,
  getArticleById,
  putArticleById,
  deleteArticleById
} = require("../controllers/articles.controller");

const { articleAccess } = require("../middlewares/articleAccess");
const { validateIdParam } = require("../middlewares/validateIdParam");

router.get("/", getArticles);
router.get("/:articleId", validateIdParam("articleId"), getArticleById);

router.post("/", articleAccess, postArticles);
router.put("/:articleId", articleAccess, validateIdParam("articleId"), putArticleById);
router.delete("/:articleId", articleAccess, validateIdParam("articleId"), deleteArticleById);

module.exports = router;