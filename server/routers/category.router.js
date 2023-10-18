const express = require("express")
const { getAllCategory } = require("../controllers/category.Controller")
const categoryRouter = express.Router()


categoryRouter.get("/getCat/:categoryType",getAllCategory)





module.exports = categoryRouter;