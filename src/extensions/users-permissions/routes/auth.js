module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/auth/:provider',
      handler: 'auth.callback',
      config: {
        auth: false,
      },
    },
  ],
};
