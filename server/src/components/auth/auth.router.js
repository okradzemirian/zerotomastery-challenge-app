const router = require('express').Router();
const db = require('../../../database/models');

module.exports = (apiRouter) => {
  router.post('/signup', async (req, res) => {
    try {
      const user = await db.User.create(req.body);
      res.json(user);
    } catch (error) {
      res.send('Unable to signup');
    }
  });

  apiRouter.use('/v1/auth', router);
};
