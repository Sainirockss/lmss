// const express = require("express");
// const router = express.Router();
// const userModel = require("../model/userModel");// Import your User model here

// // Route to handle email verification
// router.get("/verify/token", async (req, res) => {
//   try {
//     const token = req.params.token;
//     const user = await UserModel.findOne({ verificationToken: token });

//     if (!user) {
//       return res.status(404).send("User not found or token expired");
//     }

//     // Update user's verified status
//     user.verified = true;
//     user.verificationToken = undefined;
//     await user.save();

//     // Redirect to a page indicating successful verification
//     res.send("Email verification successful. You can now login.");
//   } catch (error) {
//     console.error("Verification error:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// module.exports = router;
