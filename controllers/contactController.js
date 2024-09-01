const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getContact = asyncHandler( async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

const addContact = asyncHandler(async (req, res) => {
    console.log("the request body is:", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const contact = await Contact.create({name,email,phone});
    res.status(201).json(contact);
});

const getContactId = asyncHandler(async (req, res) => {
    const contacts = await Contact.findById(req.params.id);
    // res.status(200).json({ message: `get contacts ${req.params.id}` });
    res.status(200).json(contacts);
});

const getLiteMode = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({}, {"email":1, "name":1});
    res.status(200).json(contacts);
});

const updateContact = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const update = req.body;

    const updatedContact = await Contact.findByIdAndUpdate(id, update);

    if(!updatedContact){
        return res.status(404).json({message: 'Contact not found'});
    }

    res.status(200).json(updatedContact);
});

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if(!contact) {
        res.status(404);
        throw new Error("Cannot found the ID");
    }

    res.status(200).json({ message: `delete contifacts for ${req.params.id}` });
    console.log("status");
});

module.exports = {getContact, addContact, getContactId, getLiteMode, updateContact, deleteContact};