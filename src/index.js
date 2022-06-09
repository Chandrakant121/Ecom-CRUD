const express = require("express");
const app = express();
const cors = require("cors");

//nodemon src/index.js
// http://localhost:1234/brands/create

app.use(express.json());
app.use(cors());
const connect = require("./config/db")

const usersController = require("./controllers/user.controller");
const brandsController = require("./controllers/brand.controller");
const productsController = require("./controllers/product.controller");
const categoriesController = require("./controllers/category.controller");

app.use("/users", usersController);
app.use("/brands", brandsController);
app.use("/products", productsController);
app.use("/categories", categoriesController);

app.listen(1234, async () => {
    try {
        await connect();
        console.log("Well Done Listening On PORT 1234")
    }
    catch (err) {
        console.log("Chandu Server Down")
    }
})
module.exports = app;