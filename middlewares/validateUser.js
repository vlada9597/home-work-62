function validateUserInput(req, res, next) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send('Missing required fields: username and password');
    }
  }
  next();
}
export default validateUserInput;
