// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const validator = require("validator");
// require("dotenv").config();
// const nodemailer = require("nodemailer");

// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   avatar: {
//     type: String,
//     default: "../uploads/uchiha.jpg",
//   },
//   role: {
//     type: String,
//     default: "Student",
//   },
// });

// //static signup method
// //using this fuction require regular function
// UserSchema.statics.signup = async function (name, email, password) {
//   //validation
//   if (!name || !email || !password) {
//     throw Error("All fields must be filled");
//   }
//   if (!validator.isEmail(email)) {
//     throw Error("Email not valid");
//   }
//   if (!validator.isStrongPassword(password)) {
//     throw Error("password not strong enough");
//   }

//   //email check
//   const exists = await this.findOne({ email });

//   if (exists) {
//     throw Error("Email already in use");
//   }

//   const salt = await bcrypt.genSalt(10);
//   const hash = await bcrypt.hash(password, salt);

//   const user = await this.create({ name, email, password: hash });

//   return user;
// };

// //static login method

// UserSchema.statics.login = async function (email, password) {
//   //validation
//   if (!email || !password) {
//     throw Error("All fields must be filled");
//   }
//   //email check
//   const user = await this.findOne({ email });

//   if (!user) {
//     throw Error("Incorrect Email");
//   }

//   //compare hash and user input one
//   const match = await bcrypt.compare(password, user.password);

//   if (!match) {
//     throw Error("Incorrect password");
//   }

//   return user;
// };

// module.exports = mongoose.model("UserModel", UserSchema);

// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const validator = require("validator");
// require("dotenv").config();
// const nodemailer = require("nodemailer");
// const jwt = require("jsonwebtoken");

// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   avatar: {
//     type: String,
//     default: "../uploads/uchiha.jpg",
//   },
//   role: {
//     type: String,
//     default: "Student",
//   },
//   verified: {
//     type: Boolean,
//     default: false,
//   },
//   verificationToken: String,
// });

// // Method to verify user's email
// exports.verifyEmail =  async  function (verificationToken) {
//   try {
//     // Decode the verification token to get the email
//     const decoded = jwt.verify(verificationToken, process.env.JWT_SECRET);
//     const email = decoded.email;

//     // Find the user by email and update the verified field
//     const user = await this.findOneAndUpdate(
//       { email, verificationToken },
//       { $set: { verified: true, verificationToken: null } }, // Update verified to true and remove verificationToken
//       { new: true } // Return the updated document
//     );

//     return user;
//   } catch (err) {
//     throw new Error("Invalid or expired token");
//   }
// };

// //static signup method
// UserSchema.statics.signup = async function (name, email, password) {
//   // validation
//   if (!name || !email || !password) {
//     throw Error("All fields must be filled");
//   }
//   if (!validator.isEmail(email)) {
//     throw Error("Email not valid");
//   }
//   if (!validator.isStrongPassword(password)) {
//     throw Error("password not strong enough");
//   }

//   // email check
//   const exists = await this.findOne({ email });
//   if (exists) {
//     throw Error("Email already in use");
//   }

//   await sendVerificationEmail(user);

//   const salt = await bcrypt.genSalt(10);
//   const hash = await bcrypt.hash(password, salt);

//   // Generate a verification token
//   const verificationToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' });

//   // Create user document with verification token
//   const user = await this.create({
//     name,
//     email,
//     password: hash,
//     verificationToken,
//   });

//   // Send verification email
//   // await exports.verifyEmail(verificationToken);

//   return user;
// };

// // Function to send verification email
// async function sendVerificationEmail(user) {
//   try {
//     const token = user.verificationToken;
//     let transporter = await nodemailer.createTransport({
//       host: process.env.MAIL_HOST,
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//     });

//     let info = await transporter.sendMail({
//       from: "sainirocks",
//       to: user.email,
//       subject: "Verify Your Email Address",
//       html: `
//         <p>Hello ${user.name},</p>
//         <p>Please click <a href="http://localhost:3006/verify/${token}">here</a> to verify your email address.</p>
//       `
//     });

//     console.log("Email sent:", info.response);
//   } catch (err) {
//     console.error("Error sending email:", err);
//   }
// }

// //static login method
// UserSchema.statics.login = async function (email, password) {
//   // validation

//   if (!email || !password) {
//     throw Error("All fields must be filled");
//   }

//   // email check
//   const user = await this.findOne({ email });
//   if (!user) {
//     throw Error("Incorrect Email");
//   }

//   // compare hash and user input one
//   const match = await bcrypt.compare(password, user.password);
//   if (!match) {
//     throw Error("Incorrect password");
//   }

//   // Check if user is verified
//   if (!user.verified) {
//     throw Error("Email not verified");
//   }

//   return user;
// };

// module.exports = mongoose.model("UserModel", UserSchema);

// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const validator = require("validator");
// require("dotenv").config();
// const nodemailer = require("nodemailer");
// const jwt = require("jsonwebtoken");

// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   avatar: {
//     type: String,
//     default: "../uploads/uchiha.jpg",
//   },
//   role: {
//     type: String,
//     default: "Student",
//   },
//   verified: {
//     type: Boolean,
//     default: false,
//   },
//   verificationToken: String,
// });

// // Method to verify user's email
// UserSchema.statics.verifyEmail = async function (verificationToken) {
//   try {
//     // Decode the verification token to get the email
//     const decoded = jwt.verify(verificationToken, process.env.JWT_SECRET);
//     const email = decoded.email;

//     // Find the user by email and update the verified field
//     const user = await this.findOneAndUpdate(
//       { email, verificationToken },
//       { $set: { verified: true, verificationToken: null } }, // Update verified to true and remove verificationToken
//       { new: true } // Return the updated document
//     );

//     return user;
//   } catch (err) {
//     throw new Error("Invalid or expired token");
//   }
// };

// //static signup method
// UserSchema.statics.signup = async function (name, email, password) {
//   // validation
//   if (!name || !email || !password) {
//     throw Error("All fields must be filled");
//   }
//   if (!validator.isEmail(email)) {
//     throw Error("Email not valid");
//   }
//   if (!validator.isStrongPassword(password)) {
//     throw Error("password not strong enough");
//   }

//   // email check
//   const exists = await this.findOne({ email });
//   if (exists) {
//     throw Error("Email already in use");
//   }

//   const salt = await bcrypt.genSalt(10);
//   const hash = await bcrypt.hash(password, salt);

//   // Generate a verification token
//   const verificationToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' });

//   // Create user document with verification token
//   const user = await this.create({
//     name,
//     email,
//     password: hash,
//     verificationToken,
//   });

//   // Send verification email
//   await sendVerificationEmail(user);

//   return user;
// };

// // Function to send verification email
// async function sendVerificationEmail(user) {
//   try {
//     const token = user.verificationToken;
//     let transporter = await nodemailer.createTransport({
//       host: process.env.MAIL_HOST,
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//     });

//     let info = await transporter.sendMail({
//       from: "sainirocks",
//       to: user.email,
//       subject: "Verify Your Email Address",
//       html: `
//         <p>Hello ${user.name},</p>
//         <p>Please click <a href="http://localhost:3006/verify/${token}">here</a> to verify your email address.</p>
//       `
//     });

//     console.log("Email sent:", info.response);
//   } catch (err) {
//     console.error("Error sending email:", err);
//   }
// }

// //static login method
// UserSchema.statics.login = async function (email, password) {
//   // validation
//   if (!email || !password) {
//     throw Error("All fields must be filled");
//   }

//   // email check
//   const user = await this.findOne({ email });
//   if (!user) {
//     throw Error("Incorrect Email");
//   }

//   // compare hash and user input one
//   const match = await bcrypt.compare(password, user.password);
//   if (!match) {
//     throw Error("Incorrect password");
//   }

//   // Check if user is verified
//   if (!user.verified) {
//     throw Error("Email not verified");
//   }

//   return user;
// };

// module.exports = mongoose.model("UserModel", UserSchema);

// edited by

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
require("dotenv").config();
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const OTP=require('./otp');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "../uploads/uchiha.jpg",
  },
  role: {
    type: String,
    enum:["Student","Admin"],
    default: "Admin",
  },
 
  // verificationToken: String,
});

// Method to verify user's email
// exports.verifyEmail =  async  function (verificationToken) {
//   try {
//     // Decode the verification token to get the email
//     const decoded = jwt.verify(verificationToken, process.env.JWT_SECRET);
//     const email = decoded.email;
//     const name = decoded.name;
//     const hash = decoded.hash;

//     const user = await this.create({
//       name,
//       email,
//       password: hash,
//       verificationToken,
//     });

//     // return user;
//     // Find the user by email and update the verified field
//     // const user = await this.findOneAndUpdate(
//     //   { email, verificationToken },
//     //   { $set: { verified: true, verificationToken: null } }, // Update verified to true and remove verificationToken
//     //   { new: true } // Return the updated document
//     // );

//     return user;
//   } catch (err) {
//     throw new Error("Invalid or expired token");
//   }
// };

//static signup method
UserSchema.statics.signup = async function (name, email, password, otp, role) {
  // validation
  // if (!name || !email || !password) {
  //   throw Error("All fields must be filled");
  // }
  // if (!validator.isEmail(email)) {
  //   throw Error("Email not valid");
  // }
  // if (!validator.isStrongPassword(password)) {
  //   throw Error("password not strong enough");
  // }
  try {
    console.log("data : ", name, email, password, role);
    // Check if all details are provided
    if (!name || !email || !password || !otp) {
      return Error("all field required");
    }
    // Check if user already exists
    const existingUser = await this.findOne({email:email});
    console.log("existing User: ",existingUser);
    if (existingUser) {
      return Error("user already exist");
    }
    // Find the most recent OTP for the email
    const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
    if (response.length === 0 || otp !== response[0].otp) {
      return Error("otp Invalid");
    }
    // Secure password
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      return Error("Error occur");
    }

    
    const newUser = await this.create({
      name: name,
      email,
      password: hashedPassword,
      role: role || "Student",
    });

    console.log("new User create : ",newUser);
    return newUser;
  } catch (error) {
    console.log(error.message);
    return Error("error occur during signup");
  }
};

// Function to send verification email
// async function sendVerificationEmail(name,email,verificationToken) {
//   try {
//     const token = verificationToken;
//     let transporter = await nodemailer.createTransport({
//       host: process.env.MAIL_HOST,
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//     });

//     let info = await transporter.sendMail({
//       from: "sainirocks",
//       to: email,
//       subject: "Verify Your Email Address",
//       html: `
//         <p>Hello ${name},</p>
//         <p>Please click <a href="http://localhost:3006/verify/${token}">here</a> to verify your email address.</p>
//       `
//     });

//     console.log("Email sent:", info.response);
//   } catch (err) {
//     console.error("Error sending email:", err);
//   }
// }

//static login method
UserSchema.statics.login = async function (email, password) {
  // validation

  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  // email check
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect Email");
  }

  // compare hash and user input one
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  // Check if user is verified
  // if (!user.verified) {
  //   throw Error("Email not verified");
  // }

  return user;
};

module.exports = mongoose.model("UserModel", UserSchema);
