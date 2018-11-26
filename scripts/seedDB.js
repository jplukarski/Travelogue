const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/travelogue"
);

const tripSeed = [
    {
        city: "",
        nightsStayed: 0,
        amountSpent: 0,
        currency: "",
        date: new Date(Date.now())
    }
]