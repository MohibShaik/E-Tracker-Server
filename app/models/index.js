const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
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
db.transaction = require("../models/transaction.model.js")(sequelize, Sequelize);
db.transaction_categories = require("../models/transaction-category.model.js")(sequelize, Sequelize);
db.budget = require("../models/budget.model.js")(sequelize, Sequelize);



// db.role.belongsToMany(db.user, {
//   through: "user_roles",
//   foreignKey: "role_uid",
//   otherKey: "user_uid"
// });

// db.user.belongsToMany(db.role, {
//   through: "user_roles",
//   foreignKey: "user_uid",
//   otherKey: "role_uid"
// });

// db.user.hasMany(db.task, { as: "tasks" });
// db.user.hasMany(db.transaction, { as: "transactions" });


// db.task.belongsTo(db.user, {
//   foreignKey: "userId",
//   as: "user",
// });

// db.transaction.belongsTo(db.transaction_categories, {
//   foreignKey: "categoryId",
//   as: "category",
// });


// db.budget.belongsTo(db.transaction_categories, {
//   foreignKey: "categoryId",
//   as: "category",
// });

// db.transaction.belongsTo(db.user, {
//   foreignKey: "userId",
//   as: "user",
// });

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
