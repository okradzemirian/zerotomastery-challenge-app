const router = require('express').Router();
const db = require('../../../database/models');

module.exports = (apiRouter) => {
  router.post('/signup', (req, res) => {
    res.json({ message: 'Hello' });
  });

  apiRouter.use('/v1/auth', router);
};
