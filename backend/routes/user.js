const express = require("express");

//controller fundtions

const {
  loginUser,
  signUpUser,
  updateProfile,
  getAllUsers,
} = require("../contollers/userController");
const { upload } = require("../helper/filehelper");
const { getChat } = require("../contollers/chatController");

const router = express.Router();

const otpController=require('../contollers/otpController.js');
// otp route
router.post("/sendotp",otpController.sendOTP);

//login route
router.post("/login", loginUser);

//signup route
router.post("/signup", signUpUser);

router.get("/all-users", getAllUsers);

router.post("/Profile", upload.single("avatar"), updateProfile);

//get chat

// Import necessary modules

const UserModel = require("../model/userModel"); // Import your User model here
const jwt = require("jsonwebtoken");

// Route to handle email verification














router.get("/messages", getChat);
module.exports = router;
