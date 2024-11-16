const dotenv = require("dotenv");
dotenv.config()


const express = require("express");

const userrouter = require("./routes/userRouter.js");
const bodyParser = require('body-parser');  // to catch the data in the backend

const mongoose = require('mongoose');

const cors = require("cors");
const app = express();

const path = require('path');

app.use(cors())     //api security issue in browser

const connectdb = require("./db/connection.js");

require("./Models/user.js");

const port = process.env.PORT || 8000;
const database = process.env.database || "mongodb+srv://ayushraj3645:mM1oUB4vWgZQZAET@cluster0.bjp1v.mongodb.net/";
mongoose.set('strictQuery', false);

connectdb(database);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));  // image data
app.use(bodyParser.json());
app.use(express.json());


app.use("/api/user", userrouter);



app.listen(port, () => {
  console.log(`server is runing at ${port}`);
});
