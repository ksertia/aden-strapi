module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.gmail.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME', 'sabdoullatif51@gmail.com'),
          pass: env('SMTP_PASSWORD', 'dzjw ckrk tcqp ojlx'),
        },
      },
      settings: {
        defaultFrom: 'sabdoullatif51@gmail.com',
        defaultReplyTo: 'sabdoullatif51@gmail.com',
      },
    },
  },
});
