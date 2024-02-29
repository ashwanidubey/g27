const  login=(req,res)=>{
   res.send("login")
}
const  logout=(req,res)=>{
    res.send("logout")
 }
 const  signup=(req,res)=>{
    console.log(req.body);
    res.send(req.body)
 }
 const  forgatepassword=(req,res)=>{
    res.send("forgatepassword")
 }

module.exports={login,logout, signup,forgatepassword}