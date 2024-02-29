const checkcreds=(req,res,next)=>{
   const {name,email,password,cpassword}=req.body;
   if(password!=cpassword)
     return res.send("password not matching")
   next();
}

module.exports={checkcreds}