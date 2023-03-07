const router = require('express').Router();
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  const getUsers = await User.findAll({
    order: [
      ['totalPoints', 'DESC'],
    ],
  });
  res.json(getUsers);
});

module.exports = router;
