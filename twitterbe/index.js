const express=require("express")
const {routes}=require('./routes/routes')
require("dotenv").config();

const {connectToMongo}=require("./db")
const app=express();

connectToMongo();

app.use(express.json())
app.use(routes)


const port=process.env.PORT;

app.listen(port,()=>{
    console.log("started")
})