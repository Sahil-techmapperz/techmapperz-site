const express = require("express");
const careerRoute = express.Router();
const cors = require("cors");
const Careermodel = require("../../model/Career_model/career.model");
careerRoute.use(cors());
const multer = require('multer');
const upload = multer();
const fs = require("fs");
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
    console.log(error);
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


      let AllCareer = await Careermodel.find();
      let newcareer = new Careermodel({ name, mobile, message, designetion, "resume": resume_url, userId: AllCareer.length + 1 });
      await newcareer.save();
      res.status(200).json({ "message": "your application submitted successfully" });
    } else {
      res.status(201).json({ "message": "provide all the necessary details" });
    }
  } catch (err) {
    res.status(500).json({ "message": err });
  }


});



module.exports = careerRoute;
