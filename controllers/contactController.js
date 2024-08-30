const asyncHandler = require("express-async-handler");


const getContact = asyncHandler( async (req, res) => {
    res.status(200).json({ message: "get all contacts"});
});

const addContact = asyncHandler(async (req, res) => {
    console.log("the request body is:", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({ message: "create contacts"});
});

const getContactId = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `get contacts ${req.params.id}` });
});

const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `update contacts for ${req.params.id}` });
});

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete contacts for ${req.params.id}` });
});

module.exports = {getContact, addContact, getContactId, updateContact, deleteContact};