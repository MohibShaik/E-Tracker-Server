// Note : this is the Postgres DB configuration
module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "Mohib123@",
  DB: "MList",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
