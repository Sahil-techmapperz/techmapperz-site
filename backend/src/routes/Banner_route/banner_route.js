const express = require("express");
const BannerRoute = express.Router();
const cors = require("cors");
const Bannermodel = require("../../model/Banner_model/banner_model");
BannerRoute.use(cors());
const multer = require('multer');
const upload = multer();
const ImageKit = require('imagekit');



const imagekit = new ImageKit({
  publicKey:process.env.ImagekitpublicKey,
  privateKey: process.env.ImagekitprivateKey,
  urlEndpoint: `https://ik.imagekit.io/${process.env.ImagekiturlEndpoint}`,
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


BannerRoute.get("/", async (req, res) => {
  let AllBanner = await Bannermodel.find();
  res.send(AllBanner);
});

BannerRoute.post("/", upload.single("file"), async (req, res, next) => {
  const { body: { data } } = req;
  const { heading,banner_img_url } = JSON.parse(data);
  // const { heading,banner_img_url } =req.body;
  

  
  try {
    if ( req.file!== undefined){
      const { originalname, mimetype, buffer } = req.file;
      let filetype = mimetype.split("/");
      let fileName = originalname.split(".")
      let file = `${fileName[0]}.${filetype[1]}`;
      const Banner_url = await uploadFile(buffer, file);
      console.log(Banner_url);
      let AllBanner = await Bannermodel.find();
      let newBanner = new Bannermodel({"banner_img_url": Banner_url, userId: AllBanner.length + 1,heading });
      await newBanner.save();
      res.status(200).json({ "message": "your banner details submitted successfully","data":newBanner });
    }else if(banner_img_url){
      let AllBanner = await Bannermodel.find();
      let newBanner = new Bannermodel({banner_img_url, userId: AllBanner.length + 1,heading });
      await newBanner.save();
      res.status(200).json({ "message": "your banner details submitted successfully","data":newBanner  });
    }   
    else {
      res.status(201).json({ "message": "provide all the necessary details" });
    }
  } catch (err) {
    res.status(500).json({ "message": err });
  }


});



BannerRoute.delete("/", async (req, res) => {
  const { selectedHomeBannerIds } = req.body;

  try {
    if (selectedHomeBannerIds && Array.isArray(selectedHomeBannerIds)) {
      const result = await Bannermodel.deleteMany({ userId: { $in: selectedHomeBannerIds } });

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




module.exports = BannerRoute;
