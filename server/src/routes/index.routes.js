const router = require('express').Router();

const loginRouter = require('./login.routes');

const regRouter = require('./registration.routes');
const questions = require('./questions.routes');
const logoutRouter = require('./logout.routes');
const checkRouter = require('./check.routes');
const profileRouter = require('./profile.routes');

router.get('/', (req, res) => {
  res.send('Main');
});

router.use('/signin', loginRouter);
router.use('/signup', regRouter);
router.use('/questions', questions);
router.use('/logout', logoutRouter);
router.use('/check', checkRouter);
router.use('/profile', profileRouter)

module.exports = router;
