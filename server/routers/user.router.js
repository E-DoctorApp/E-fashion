const express = require('express');
const userRouter = express.Router();
const { register, login, getOneUser, getUserByType } = require('../controllers/user.Controller');
const authProtection = require('../middleware/authMiddleware');


// userRouter.get("/getAll", getAll);
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/getOne", authProtection, getOneUser);
userRouter.get("/getByType/:type", getUserByType);












module.exports = userRouter;