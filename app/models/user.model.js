module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    user_uid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    gender: {
      type: Sequelize.STRING,
    },
    mobileNumber: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
    },
    profile_img: {
      type: Sequelize.TEXT,
    },

    is_active: {
      type: Sequelize.BOOLEAN,
    }

  });

  return User;
};
