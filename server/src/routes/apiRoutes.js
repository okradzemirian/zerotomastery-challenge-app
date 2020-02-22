module.exports = (apiRouter) => {
  /* eslint-disable global-require */
  require('../components/welcome/welcome.router')(apiRouter);
  require('../components/auth/auth.router')(apiRouter);
  /* eslint-enable global-require */
};
