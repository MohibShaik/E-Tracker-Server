const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

const Role = db.role;
const TransactionCategories = db.transaction_categories;

db.sequelize.sync().then(() => {
  console.log("Drop and Resync Db");
  // loadTransactionCategories();
});

// const transaction_categories = require("./transaction-categories.json");
// console.log(transaction_categories);

// transaction_categories.forEach(x => {
//   loadTransactionCategories(x.transaction_category_name, x.is_active)
// })


async function loadTransactionCategories(categoryName, isActive) {
  await TransactionCategories.create({
    transaction_category_name: categoryName,
    is_active: isActive
  }).then((data) => {
    console.log('transaction category loaded successfully');
  }).catch((err) => {
    console.log(err.message)
  });

}


require("./app/routes/auth.routes.js")(app);
require("./app/routes/user.routes.js")(app);
require("./app/routes/task.routes.js")(app);
require("./app/routes/transaction.routes.js")(app);
require("./app/routes/budget.routes.js")(app);



// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to M'list application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
