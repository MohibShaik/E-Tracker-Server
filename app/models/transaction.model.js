module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define("transaction", {
        type: {
            type: Sequelize.STRING,
        },
        payeeName: {
            type: Sequelize.STRING,
        },
        categoryName: {
            type: Sequelize.STRING,
        },
        transactionDate: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: new Date(),
        },
        amount: {
            type: Sequelize.INTEGER,
        },
    });

    return Transaction;
};
