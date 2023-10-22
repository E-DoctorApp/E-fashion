const express = require('express');
const { getAllPostsByUser, updatePost, removePost, createPost,getAllPosts } = require('../controllers/post.Controller');
const postRouter = express.Router();




postRouter.get("/getAll",getAllPosts)
postRouter.get('/getAll/:userId', getAllPostsByUser)
postRouter.post("/add", createPost)
postRouter.put("/update/:id", updatePost)
postRouter.delete("/delete/:id", removePost)



















module.exports = postRouter;