// Note : this is the Postgres DB configuration
module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "Mohib123@",
  DB: "TodoList",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// for deployment prod
// module.exports = {
//   HOST: "ec2-52-5-247-46.compute-1.amazonaws.com",
//   USER: "nfzcwcenvzwhrz",
//   PASSWORD: "6d3f685af7c7df8b02903070071007c1ee07b596f1286d84829acf9748059487",
//   DB: "dau0u69l456mba",
//   dialect: "postgres",
  
// };
