module.exports = (sequelize, Sequelize) => {
    const TransactionCategories = sequelize.define("transaction_categories", {
        transaction_category_uid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        transaction_category_name: {
            type: Sequelize.STRING
        },
        is_active: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        }
    });

    return TransactionCategories;
};
