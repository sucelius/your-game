const router = require('express').Router();
const { Games } = require('../../db/models');

router.post('/endTimer', (req, res) => {
 const {questionId, userId} = req.body
 console.log(questionId, userId)
});

module.exports = router;
