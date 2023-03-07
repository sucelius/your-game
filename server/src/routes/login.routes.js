const router = require('express').Router();
const { User } = require('../../db/models');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.json({ message: 'Неверное имя пользователя' });
    }
    const hashPassword = await bcrypt.compare(password, user.password);
    if (!hashPassword) {
      return res.json({ message: 'Неверное имя пользователя или пароль' });
    }
    req.session.user = { id: user.id, name: user.name };
    console.log(req.session.user)
    req.session.save(() => {
      res.json({ id: user.id, name: user.name });
    });
  } catch (error) {
    console.error(error);
    res.json(false);
  }
});

module.exports = router;
