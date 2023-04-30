const express = require("express");
const mongoose =require("mongoose");
const helmet= require("helmet");
const morgan =require("morgan");
const dotenv =require("dotenv");
const userRoute =require("./routes/users");
const authRoute =require("./routes/auth");
const postRoute =require("./routes/posts");

const app =express();
dotenv.config()

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Connected to MongoDB');
});

console.log(`Mongoose connection state: ${db.readyState}`);

//middleware 

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute)
// app.get("/", (req,res)=>{
//     res.send('welcome to Home Page')
// }) 

app.listen(8800,()=>{
    console.log(" Backend is running")
})