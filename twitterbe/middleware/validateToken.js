const jwt=require("jsonwebtoken")
let signature="ashwani"
const validateToken=(req,res,next)=>{
    let {token}=req.body
    let data= jwt.decode(token,signature)
    if(data=="")
    {
        return res.send({sucess:false , message:"invalid toke"})
    }
    next();

}

module.exports={validateToken}