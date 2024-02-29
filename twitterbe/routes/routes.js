const express=require("express")
const routes=express.Router();
const {authentication}=require('./authentication')
const {others}=require('./others')

routes.use("/v1",authentication);
routes.use("/v2",others);

module.exports={routes}