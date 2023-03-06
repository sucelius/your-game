const router = require('express').Router();
// const bcrypt = require('bcrypt');
const { Question, Game } = require('../../db/models');

router.post('/', async (req, res) => {
  const {user} =req.body
  console.log(user)
  try {
    const questions = await Question.findAll({
      raw: true,
      nest: true,
    });
    console.log(req.session?.user?.id)
    // if(req.session?.user?.id){

      const gameQuestions = [...questions];
      gameQuestions.forEach(async (el) => {
        await Game.findOrCreate({ where: { userId: req.session.user.id, questionId: el.id }, defaults: { isTouch: false } });
      });
      const gameBoard = await Game.findAll({
        where: { userId: req.session.user.id },
        raw: true,
        nest: true,
      });
    // }


    res.json({ questions, gameBoard });
  } catch (error) {
    console.log('question error', error);
  }
});

module.exports = router;
