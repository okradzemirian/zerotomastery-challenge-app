const router = require('express').Router();
const bcrypt = require('bcryptjs');
const db = require('../../../database/models');

module.exports = (apiRouter) => {
  router.post('/signup', async (req, res) => {
    try {
      const password = await bcrypt.hash(req.body.password, 10);
      const user = await db.User.create({ ...req.body, password });
      res.json(user);
    } catch (error) {
      res.send('Unable to signup');
    }
  });

  apiRouter.use('/v1/auth', router);
};
