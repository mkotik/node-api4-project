const checkReqBody = (req, res, next) => {
  const { username, password } = req.body;
  if (username && password) {
    req.user = { username, password };
    next();
  } else {
    res.status(400).json({ message: "please include username and password" });
  }
};

module.exports = { checkReqBody };
