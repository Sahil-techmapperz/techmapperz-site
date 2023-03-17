const mongoose =require('mongoose')

const jobSchema=new mongoose.Schema ({
    userId:{type:Number,required:true},
    description: {type:String},
    designetion: {
        type:String,
        required:true},
    experience:{type:String},
    location:{type:String},
    JobID:{type:String},
    Jobtype:{type:String}
});

let Jobsmodel=mongoose.model("jobs",jobSchema)

module.exports=Jobsmodel;