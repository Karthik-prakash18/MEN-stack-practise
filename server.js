const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

// middleware


// agar body ko console.log karenge toh undefined aata hai toh usko tekh karne ke liye middleware 
// use karte hai
// body ke contents ko console.log karne main help karta hai
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);



app.listen(port, ()=> {
    console.log(`Server running on ${port}`);
});
