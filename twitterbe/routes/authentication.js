const express=require("express")
const {login,logout, signup,forgatepassword}
           =require("../function/authentication")
const {checkcreds}=require("../middleware/checkcreds")
const {isEmailExist}=require("../middleware/isEmailExist")
const authentication=express.Router();

authentication.post('/login',login)
authentication.post('/logout',logout)
authentication.post('/signup',checkcreds,isEmailExist,signup)
authentication.post('/forgatepassword',forgatepassword)

module.exports={authentication}