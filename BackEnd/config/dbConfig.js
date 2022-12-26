const dbOptions = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: "feedback",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

module.exports = dbOptions;
