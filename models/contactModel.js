const mongoose = require('mongoose');
const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the name"]
    },
    email: {
        type: String,
        required: [true, "Please add the email"]
    },
    phone: {
        type: Number,
        required: [true, "Please add the phone"]
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model('Contact', contactSchema);