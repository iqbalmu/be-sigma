const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    console.log(req.file);
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).json({ message: 'Token not provided' });
    }

    jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.log(err);
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.user = decoded; // Informasi pengguna tersedia di req.user
        next();
    });
};

module.exports = { verifyToken }