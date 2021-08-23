const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "dau0u69l456mba",
  "nfzcwcenvzwhrz",
  "6d3f685af7c7df8b02903070071007c1ee07b596f1286d84829acf9748059487",
  {
    host: "ec2-52-5-247-46.compute-1.amazonaws.com",
    dialect: "postgres",
    operatorsAliases: false,
    dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false
      }
  }
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// table models 
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.task = require("../models/task.model.js")(sequelize, Sequelize);



db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.user.hasMany(db.task, { as: "tasks" });

db.task.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
