const router = require('express').Router();
const { Game, User } = require('../../db/models');

router.post('/', async (req, res) => {
  const { checkAnswer, points } = req.body;
  await Game.update({ isRight: checkAnswer.isRight, isTouch: checkAnswer.isTouch }, { where: { id: checkAnswer.id } });
  await User.update({ totalPoints: points }, { where: { id: checkAnswer.userId } });
});

module.exports = router;
