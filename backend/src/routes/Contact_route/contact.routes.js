const express = require("express");
const contactRoute = express.Router();
const cors = require("cors");
const contactModel = require("../../model/Contact_model/contact.model");
// const { SaveData } = require("../../model/Common_model");
contactRoute.use(cors());

contactRoute.get("/", async (req, res) => {
  res.send("welcome to ContactRoute");
});



contactRoute.post("/", async (req, res) => {
  const{name,email,mobile,projectType,projectdetails}=req.body;
  try{
  if(name&&email&&mobile&&projectType&&projectdetails){
    let AllContact=await contactModel.find();
    let newcontact= new contactModel({name,email,mobile,projectType,projectdetails,userId:AllContact.length+1});
    // let newcontact={name,email,mobile,projectType,projectdetails,userId:AllContact.length+1};
    // let newres= SaveData(newcontact);
  let newres= await newcontact.save();
     res.status(200).json({"message":"success"});
  }else{
    res.status(201).json({"message":"provide all details"});
  }
}catch(err){
  res.status(500).json({"message":err});
}
});


module.exports = contactRoute;
