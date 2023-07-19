const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const connectionString = env("DATABASE_URL"); // Use the environment variable for the connection string

  // Parse the connection string to get individual details
  const { host, port, database, user, password } = parse(connectionString);

  return {
    connection: {
      client: "postgres",
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
