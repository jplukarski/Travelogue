const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/travelogue"
);

const tripSeed = [
    {
        city: "Amsterdam",
        nightsStayed: 4,
        amountSpent: 300,
        currency: "EUR",
        date: new Date(Date.now())
    },
    {
        city: "Portland",
        nightsStayed: 3,
        amountSpent: 500,
        currency: "USD",
        date: new Date(Date.now())
    },
    {
        city: "London",
        nightsStayed: 4,
        amountSpent: 300,
        currency: "GBP",
        date: new Date(Date.now())
    },
]

db.Trip
    .remove({})
    .then(() => db.Trip.collection.insertMany(tripSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });