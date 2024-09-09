const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const userAvailable = await User.findOne({email: email});
    if(userAvailable){
        res.status(400);
        throw new Error("Users already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password", hashedPassword);


    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });

    console.log(`user is ${user}`);

    if(user){
        res.status(201).json({_id: user.id, email: user.email});
    } else{
        res.status(400);
        throw new Error("User data not valid");
    }
    // res.json({message: "register the user"});
});

const loginUser = asyncHandler(async (req, res) => {
    res.json({message: "login user"});
});

const currentUser = asyncHandler((req, res) => {
    res.json({message: "current user"});
})

module.exports = {registerUser, loginUser, currentUser};