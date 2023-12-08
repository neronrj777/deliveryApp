const mongoose = require('mongoose');

const CourierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: { 
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: false
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }]
    // Add more fields as necessary
});

const Courier = mongoose.model('Courier', CourierSchema);

module.exports = Courier;
