module.exports = (sequelize, Sequelize) => {

    const TaskCategory = sequelize.define("task_categories", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        }
    });

    return TaskCategory;
}