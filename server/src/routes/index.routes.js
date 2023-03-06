const router = require('express').Router();

const loginRouter = require('./login.routes');

const regRouter = require('./registration.routes');
// const logoutRouter = require('./logout.routes');

router.get('/', (req, res) => {
  res.send('Main');
});

router.use('/signin', loginRouter);
router.use('/signup', regRouter);
// router.use('/logout', logoutRouter);

module.exports = router;
