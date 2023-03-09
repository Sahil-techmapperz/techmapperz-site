const mongoose =require('mongoose')

const careerSchema=new mongoose.Schema ({
    userId:{type:Number,required:true},
    name: {type:String},
    mobile: {type:String, required:true},
    designetion: {
        type:String,
        enum:["junior Business Development Executive" ,"Senior Business Development Executive","Developer","UI/UX Designer"],
        required:true},
    message: {type:String},
    resume:{type:File}

},{timestamps :true});


module.exports=mongoose.model("career",Career)