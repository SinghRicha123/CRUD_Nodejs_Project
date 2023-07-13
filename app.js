const express = require('express');
const app = express();
const connectToDb = require('./config/db.js');

//Express Middleware 
app.use(express.json());


// init database connection 
connectToDb();

const userRouters = require('./routers/userRouter.js')

app.use("/" , userRouters)

module.exports = app;