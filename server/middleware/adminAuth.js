const jwt = require('jsonwebtoken');

const adminAuth = (req, res, next) => {

  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Please login your account!' });

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decodedToken;

    if (req.userData.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admin only.' });
    }
    next();
  }
  catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token!' });
  }
};

module.exports = adminAuth;