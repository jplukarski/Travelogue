const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    city: { type: String, required: true },
    nightsStayed: { type: String, required: true },
    amountSpent: { type: String, required: true },
    currency: { type: String, required: true },
    currencySymbol: { type: String, required: false },
    date: { type: Date, default: Date.now }
})

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;