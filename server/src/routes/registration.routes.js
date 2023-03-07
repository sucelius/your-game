const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/', async (req, res) => {
  const { name, password, email } = req.body;
  try {
    const candidateUsername = await User.findOne({ where: { email } });
    if (candidateUsername) {
      return res.json({ message: 'Имя пользователя занято' });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name, email, password: hashPassword, totalPoints: 0,
    });
    req.session.user = { id: user.id, name: user.name };
    req.session.save();
    console.log(user);
    res.json({ id: user.id, name: user.name, totalPoints: user.totalPoints });
  } catch (error) {
    res.json({ message: 'Регистрация не прошла' });
  }
});

module.exports = router;
