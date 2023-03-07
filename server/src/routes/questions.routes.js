const router = require('express').Router();
// const bcrypt = require('bcrypt');
const {Question, Game} = require('../../db/models');

router.post('/', async (req, res) => {
  const {id} = req.body
  console.log('REQ-Body->>', id)
  try {
    const questions = await Question.findAll({
      raw: true,
      nest: true,
    });

    // if(req.session?.user?.id){

    const gameQuestions = [...questions];
    gameQuestions.forEach(async (el) => {
      await Game.findOrCreate({where: {userId: id, questionId: el.id}, defaults: {isTouch: false}});
    });
    const gameBoard = await Game.findAll({
      where: {userId: id},
      raw: true,
      nest: true,
    });
    // }


    res.json({questions, gameBoard});
  } catch (error) {
    console.log('question error', error);
  }
});

module.exports = router;
