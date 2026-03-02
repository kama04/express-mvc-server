const articles = [
  { id: "101", title: "Express Basics", author: "Admin", body: "Intro to Express..." },
  { id: "102", title: "MVC Pattern", author: "Bob", body: "How to structure apps..." },
  { id: "103", title: "Templates: PUG & EJS", author: "Alice", body: "Two engines in one app!" }
];

function getArticles(req, res) {
  res.render("articles/index.ejs", { title: "Articles", articles });
}

function postArticles(req, res) {
  res.type("text").send("Post articles route");
}

function getArticleById(req, res) {
  const { articleId } = req.params;
  const article = articles.find(a => a.id === articleId);

  if (!article) return res.status(404).type("text").send("Article not found");

  res.render("articles/detail.ejs", { title: `Article ${articleId}`, article });
}

function putArticleById(req, res) {
  const { articleId } = req.params;
  res.type("text").send(`Put article by Id route: ${articleId}`);
}

function deleteArticleById(req, res) {
  const { articleId } = req.params;
  res.type("text").send(`Delete article by Id route: ${articleId}`);
}

module.exports = {
  getArticles,
  postArticles,
  getArticleById,
  putArticleById,
  deleteArticleById
};