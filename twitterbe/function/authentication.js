const mongoose = require('mongoose');
const {User}=require("../models/User")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const signature="ashwani"
const  login=async (req,res)=>{
   const {email,password}=req.body;
   let users= await User.find({email})
  
   if(users.length==0){
    return res.send("user not found")
   }
   let hashp=users[0].password;
   let response=await bcrypt.compare(password,hashp)
   if(response)
   {
      let data={id:users[0].id};
      let token=jwt.sign(data,signature)
      return res.send({token,succes:true})
   }
   return res.send("either email or password is incorrect")
}
const  logout=(req,res)=>{
    res.send("logout")
 }
 const  signup=async (req,res)=>{
    console.log(req.body);

    const {name,email,password,cpassword}=req.body;
    let salt=await bcrypt.genSalt();
    let hashpass=await bcrypt.hash(password,salt)
    const user = new User({name,email,password:hashpass});
     user.save().then(() => console.log('user created'));
     let data={id:user.id};
     let token=jwt.sign(data,signature)
     return res.send({token,succes:true})
 }
 const  forgatepassword=(req,res)=>{
    res.send("forgatepassword")
 }

module.exports={login,logout, signup,forgatepassword}