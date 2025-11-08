export function getArticles(req, res) {
  res.send('List of articles');
}

export function getArticleById(req, res) {
  const { articleId } = req.params;
  res.send(`Article ID: ${articleId}`);
}
