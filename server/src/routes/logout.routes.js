const router = require('express').Router();

router.get('/', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('sid');
    res.json({ message: 'success' });
  });
});
module.exports = router;
