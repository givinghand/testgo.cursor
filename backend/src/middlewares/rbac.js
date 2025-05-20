// req.user.roles içindeki rolleri kontrol eder
exports.ensureAdmin = (req, res, next) => {
  if (!req.user.roles.includes('admin')) {
    return res.status(403).json({ error: 'Admin yetkisi gerekli' });
  }
  next();
};
