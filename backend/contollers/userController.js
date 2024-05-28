const UserModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const cloudinary = require("../helper/cloudinary");
const userModel = require("../model/userModel");
var mongoose = require("mongoose");

// // create token structure
// const createToken = (_id) => {
//   return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: "1h" });
// };

// //login user

// const loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   console.log(req.body);

//   try {
//     const user = await UserModel.login(email, password);

//     //create token
//     const token = createToken(user._id);
//     const _id = user._id;
//     const name = user.name;
//     const avatar = user.avatar;
//     const role = user.role;
//     console.log(name, avatar, _id, email,"token", token, role);
//     const options={
//       secure:false,
//       httpOnly:true,
//       samesite:'none',
//       expiresIn:'1h',
//     }
//     res.cookie("token",token,options).status(200).json({ name, avatar, _id, email, token, role });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ error: error.message });
//   }
// };




const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: "1h" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.login(email, password);

    // Create token
    const token = createToken(user._id);
    user.token = token;
    const { _id, name, avatar, role} = user;

    const options = {
      secure: true, 
      httpOnly: true,
      sameSite: 'none',
      expires: new Date(Date.now() + 3600000), // Cookie expires in 1 hour
    };
    // localStorage.setItem("token", token);
   console.log("token to baan gya hai ",token);
   
    res.cookie("token", token, options).status(200).json({ name, avatar, _id, email, token, role });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};  


















//signup user

const signUpUser = async (req, res) => {
  const { name, email, password,otp,role } = req.body;
  console.log("role is there",role);
  console.log(req.body);
  try {
    const user = await UserModel.signup(name, email, password,otp,role);
    console.log("user created",user);
    //create token
    const token = createToken(user._id);
    console.log("this is token",token);

    res.status(200).json({success:true, email, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

//update user profile
const updateProfile = async (req, res) => {
  const id = req.body._id;
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      public_id: `${id}_profile`,
    });

    const user = await userModel.findByIdAndUpdate(
      { _id: id },
      {
        avatar: result.url,
      }
    );
    console.log(result.url);
    console.log("saved to db");
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({}).where({ role: "Student" });
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signUpUser,
  updateProfile,
  getAllUsers,
};
