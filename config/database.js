const { parse } = require("pg-connection-string");
const databaseUrl = "postgres://event_5qb7_user:AU6IGfKXezB61Zg498yfkpSgBUYi7LEJ@dpg-cirn1vp8g3n42ojkma10-a.oregon-postgres.render.com/event_5qb7";

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(databaseUrl);

  return {
    connection: {
      client: "pg",
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: true, // Enable SSL/TLS for the connection
      },
      debug: false,
    },
  };
};
