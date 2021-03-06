module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define("transaction", {
        transaction_uid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        transaction_type: {
            type: Sequelize.STRING,
        },
        payeeName: {
            type: Sequelize.STRING,
        },
        transaction_created_date: {
            type: Sequelize.DATE,
            defaultValue: new Date(),
        },
        transaction_amount: {
            type: Sequelize.INTEGER,
        },
        transaction_category: {
            type: Sequelize.STRING,
        },
        transaction_category_id: {
            type: Sequelize.INTEGER,
        },
        user_uid: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        budget_uid: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        is_active: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        }
    });

    return Transaction;
};
