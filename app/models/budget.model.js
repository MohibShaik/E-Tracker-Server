module.exports = (sequelize, Sequelize) => {
    const Budget = sequelize.define("budget", {
        budget_uid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        budget_category: {
            type: Sequelize.STRING,
        },
        budget_category_id: {
            type: Sequelize.INTEGER,
        },
        budget_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        budget_created_date: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: new Date(),
        },
        budget_amount: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        created_user_uid: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        is_active: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        }
    });

    return Budget;
};
