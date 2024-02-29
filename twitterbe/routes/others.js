const express=require("express")
const {
    savedpost,modifyuserdata,shareuserdata,
    searchpost,updatepost,deletepost,
    createpost,updatecomment,deletecomment,
    unlike,comment,like
 }=require("../function/others")

const others=express.Router();

others.get('/like',like)
others.get('/comment',comment)
others.get('/unlike',unlike)
others.get('/deletecomment',deletecomment)
others.get('/updatecomment',updatecomment)
others.get('/createpost',createpost)
others.get('/deletepost',deletepost)
others.get('/updatepost',updatepost)
others.get('/searchpost',searchpost)
others.get('/shareuserdata',shareuserdata)
others.get('/modifyuserdata',modifyuserdata)
others.get('/savedpost',savedpost)

module.exports={others}