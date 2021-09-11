module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("roles", {
    role_uid: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    role_name: {
      type: Sequelize.STRING
    }
  });

  return Role;
};
