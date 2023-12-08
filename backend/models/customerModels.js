const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: { // Always remember to hash passwords before storing them!
        type: String,
        required: true
    },
    address: String,
    phoneNumber: String,
    // Add more fields as necessary
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;
