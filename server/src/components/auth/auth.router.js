const router = require('express').Router();
const db = require('../../../database/models');

module.exports = (apiRouter) => {
  router.post('/signup', async (req, res) => {
    const user = await db.User.create(req.body);
    res.json(user);
  });

  apiRouter.use('/v1/auth', router);
};
