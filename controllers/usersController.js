export function getUsers(req, res) {
  res.send('List of users');
}

export function createUser(req, res) {
  const { username } = req.body;
  res.send(`User ${username} created successfully`);
}
