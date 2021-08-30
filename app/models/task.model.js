module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define("task", {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
    status: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
    dueDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    priority: {
      type: Sequelize.STRING,
    },
  });

  return Task;
};
