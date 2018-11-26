module.exports = {
    Trip: require("./trip")
};

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    city: { type: String, required: true },
    nightsStayed: { type: Number, required: true },
    amountSpent: { type: Number, required: true },
    currency: { type: String, required: true },
    date: { type: Date, default: Date.now }
})

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;