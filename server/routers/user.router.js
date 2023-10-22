const express = require('express');
const userRouter = express.Router();
const { register, login, getOneUser, getUserByType,getAllUser,deleteUser,updateUser } = require('../controllers/user.Controller');
const authProtection = require('../middleware/authMiddleware');


// userRouter.get("/getAll", getAll);
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/getOne", authProtection, getOneUser);
userRouter.get("/getByType/:type", getUserByType);
userRouter.get("/getAll", getAllUser)
userRouter.delete("/deleteUser/:id",deleteUser)
userRouter.put("/updateUser/:id", updateUser)










module.exports = userRouter;