module.exports = ({ env }) => ({
  url: env("RENDER_EXTERNAL_URL"),
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
  app: {
    keys: [env('APP_KEYS')],
  },
});
