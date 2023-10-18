const express = require('express');
const app = express();
require('dotenv').config()
// require('./database/index')
const userRouter = require('./routers/user.router')


const productRouter = require('./routers/product.router')

const postRouter = require('./routers/post.router')

const categoryRouter = require("./routers/category.router")

const port = process.env.PORT; // Change this to your desired port number


app.use(express.json());

app.use("/api/users", userRouter);


app.use("/api/products",productRouter);

app.use("/api/posts", postRouter)

app.use("/api/category",categoryRouter)


// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
