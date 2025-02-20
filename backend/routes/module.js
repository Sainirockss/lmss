const express = require("express");
const { createModule, addLink ,uploadFile } = require("../contollers/courseController");

const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const { upload } = require("../helper/filehelper");

//require auth for all workout routes
router.use(requireAuth);

//POST A NEW single module  || using req u can access data
router.post("/", upload.single("doc"), createModule);

//POST A NEW single module  || using req u can access data
router.post("/addLink", addLink);


router.post("/uploadFile",upload.single("pdf"),uploadFile);

module.exports = router;
