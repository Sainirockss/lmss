// const express = require('express');
// const {UserModel,verifyEmail} = require('../model/userModel'); // Adjust the path accordingly

// const router = express.Router();

// // Route for handling email verification
// router.get('/verify/:token', async (req, res) => {
//   const token = req.params.token;

//   try {
//     console.log("verified email pending");
//     // Call the verifyEmail method to update the user's verification status
//     const user = await UserModel.verifyEmail(token);
//     console.log("verified email done");
//     // Optionally, you can redirect the user to a success page
//     res.redirect('/');
//   } catch (err) {
//     // Handle errors (e.g., invalid token, expired token)
//     res.status(400).send("Invalid or expired token");
//   }
// });

// module.exports = router;





// const express = require('express');
// const router = express.Router();
// const UserModel = require('../models/UserModel');

// router.get('/verify/:token', async (req, res) => {
//   const token = req.params.token;

//   try {
//     console.log("Verifying email...");
//     // Call the verifyEmail method to update the user's verification status
//     const user = await UserModel.verifyEmail(token);
//     console.log("Email verified successfully");
//     // Optionally, you can redirect the user to a success page
//     res.redirect('/'); // Redirect to the home page
//   } catch (err) {
//     // Handle errors (e.g., invalid token, expired token)
//     console.error("Error verifying email:", err.message);
//     res.status(400).send("Invalid or expired token");
//   }
// });

// module.exports = router;
