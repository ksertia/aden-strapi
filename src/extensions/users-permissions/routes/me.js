module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/users/me',
      handler: 'user.me',
      config: {
        auth: true,
      },
    },
  ],
};
