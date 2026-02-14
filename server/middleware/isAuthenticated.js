const jwt = require('jsonwebtoken');

const isAuthenticated = (req, res, next) => {

  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Please login to your account!' });

  try {

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decodedToken;

    next();
  } catch (err) {
    return res.status(401).json({ error: 'Session expired or invalid token!' });
  }
};

module.exports = isAuthenticated;