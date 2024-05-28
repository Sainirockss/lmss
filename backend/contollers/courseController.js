const Chapters = require("../model/chaptersModel");
const mongoose = require("mongoose");
const cloudinary = require("../helper/cloudinary");

//create a single module
//upload a note
const createModule = async (req, res) => {
  const { _id, title } = req.body;

  console.log(_id);
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const img = result.url;

    const chapters = await Chapters.updateOne(
      { _id: _id },
      { $push: { file: { title: title, link: img } } }
    );
    res.status(200).json(chapters);
  } catch (err) {
    res.status(400);
    console.log(err);
  }
};

//Create a module with link
const addLink = async (req, res) => {
  const { _id, head, linktxt } = req.body;
  console.log(req.body);
  try {
    const chapters = await Chapters.updateOne(
      { _id: _id },
      { $push: { links: { title: head, link: linktxt } } }
    );
    res.status(200).json(chapters);
  } catch (err) {
    res.status(400);
    console.log(err);
  }
};
const uploadFile = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    const { _id, fileTitle } = req.body;

    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      const fileUrl = result.url;

      const chapters = await Chapters.updateOne(
        { _id: _id },
        { $push: { files: { title: fileTitle, link: fileUrl } } }
      );
      res.status(200).json(chapters);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
};



module.exports = {
  createModule,
  addLink,
  uploadFile,
};







