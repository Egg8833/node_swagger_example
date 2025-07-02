export function hello(req, res) {
  res.json({ message: `Hello, ${req.user.username}!` });
}
