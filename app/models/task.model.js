module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define("task", {
    task_uid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    task_title: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    task_description: {
      type: Sequelize.TEXT,
    },

    task_category: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    task_category_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    task_due_date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },

    task_priority: {
      type: Sequelize.STRING,
    },

    created_user_uid: {
      type: Sequelize.INTEGER,
    },

    is_active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    }
  });

  return Task;
};
