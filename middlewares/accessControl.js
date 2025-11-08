function checkArticleAccess(req, res, next) {
  const hasAccess = true; // можна зробити false для перевірки 403
  if (!hasAccess) {
    return res.status(403).send('Access denied: insufficient permissions.');
  }
  next();
}
export default checkArticleAccess;
