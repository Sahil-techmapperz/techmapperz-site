const express = require("express");
const careerRoute = express.Router();
const cors = require("cors");
const careerModel = require("../model/career.model");
careerRoute.use(cors());

careerRoute.get("/", async (req, res) => {
  res.send("welcome to CareerRoute");
});

contactRoute.post("/", async (req, res) => {
  const{name,mobile,designetion,message,resume}=req.body;
  try{
  if(name&&designetion&&mobile&&message&&resume){
    let AllCareer=await careerModel.find();
    let newcareer= new contactModel({name,mobile,designetion,message,resume,userId:AllCareer.length+1});
    await newcareer.save();
    res.status(200).json({"message":"successfully Completed"});
  }else{
    res.status(201).json({"message":"provide all details"});
  }
}catch(err){
  res.status(500).json({"message":err});
}
});


module.exports = careerRoute;
