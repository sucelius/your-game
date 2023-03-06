const router = require("express").Router();
// const bcrypt = require('bcrypt');
const { Question } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const questions = await Question.findAll({
      raw: true,
      nest: true,
    });

    console.log(questions);
    res.json(questions);
  } catch (error) {
    console.log("question error", error);
  }
});

module.exports = router;
