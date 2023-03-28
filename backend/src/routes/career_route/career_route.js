const express = require("express");
const careerRoute = express.Router();
const cors = require("cors");
const Careermodel = require("../../model/Career_model/career.model");
careerRoute.use(cors());
const multer = require('multer');
const upload = multer();
const ImageKit = require('imagekit');



const imagekit = new ImageKit({
  publicKey: "public_uw+Iy20W6XHXO3AjkXEW2K+2tgo=",
  privateKey: "private_B4IrCM6a0Q7Q+r/03UZGZINFyrE=",
  urlEndpoint: "https://ik.imagekit.io/lrrkr27gr",
});



const uploadFile = async (fileBuffer, fileName) => {
  try {
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: fileName,
      folder: "/uploads",
    });

    return response.url;
  } catch (error) {
   
    return null;
  }
};


careerRoute.get("/", async (req, res) => {
  let AllCareer = await Careermodel.find();
  res.send(AllCareer);
});

careerRoute.post("/", upload.single("file"), async (req, res, next) => {
  const { body: { data } } = req;
  const { name, mobile, message, designetion } = JSON.parse(data);
  const { originalname, mimetype, buffer } = req.file;
  try {
    if (name && mobile && message && buffer && designetion && originalname && mimetype && buffer) {

      let filetype = mimetype.split("/");
      let fileName = originalname.split(".")
      let file = `${fileName[0]}.${filetype[1]}`;


      const resume_url = await uploadFile(buffer, file);
      console.log(resume_url);
      const currentDate = new Date();
      const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;



      let AllCareer = await Careermodel.find();
      let newcareer = new Careermodel({ name, mobile, message, designetion, "resume": resume_url, userId: AllCareer.length + 1,Date: formattedDate, });
      await newcareer.save();
      res.status(200).json({ "message": "your application submitted successfully" });
    } else {
      res.status(201).json({ "message": "provide all the necessary details" });
    }
  } catch (err) {
    res.status(500).json({ "message": err });
  }


});



careerRoute.delete("/", async (req, res) => {
  const { selectedCareerIds } = req.body;

  try {
    if (selectedCareerIds && Array.isArray(selectedCareerIds)) {
      const result = await Careermodel.deleteMany({ userId: { $in: selectedCareerIds } });

      if (result.deletedCount > 0) {
        res.status(200).json({ message: "Career applications deleted successfully." });
      } else {
        res.status(404).json({ message: "No career applications found with the provided ids." });
      }
    } else {
      res.status(400).json({ message: "Invalid request. Provide an array of career application ids." });
    }
  } catch (err) {
    res.status(500).json({ message: "Error deleting career applications.", error: err });
  }
});




module.exports = careerRoute;
