const express = require("express");
const jobRoute = express.Router();
const cors = require("cors");
const Jobsmodel = require("../../model/Jobs_model/jobs_model");
jobRoute.use(cors());

jobRoute.get("/", async (req, res) => {
    let AllJob=await Jobsmodel.find();
  res.status(200).json(AllJob);
});

jobRoute.post("/", async (req, res) => {
  const{description,designetion,experience,location,JobID,Jobtype}=req.body;

  try{
  if(description&&designetion&&experience&&location&&JobID&&Jobtype){
    let AllJob=await Jobsmodel.find();
    let newJob= new Jobsmodel({description,designetion,Jobtype,experience,location,userId:AllJob.length+1,JobID});
    await newJob.save();
    res.status(200).json({"message":"Job Posted successfully"});
  }else{
    res.status(201).json({"message":"provide all details"});
  }
}catch(err){
  res.status(500).json({"message":err});
}
});


module.exports = jobRoute;