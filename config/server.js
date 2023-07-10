module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  middleware: {
    session: {
      enabled: true,
      keys: ['602bb7853973404fb14b2fe21f67ad4c73b2d065e22831d562ea2d302884ff8c587362b8083b9cddbea4105794e47346ec532f776b68596a3986e18b289da8291d2bd203666d4ffc894c3d77a3617084895e77c3f809c7e9d1e02b5516c55814c77cfa83017dcd529c1b6ec3d2ea2d6ac8fb12615c7c6bdb0c4a165c5ef44b01'],
    },
  },
});
