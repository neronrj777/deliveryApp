const Courier = require('../models/couriersModels'); // Import your Courier model here

exports.getCourierDetails = async (req, res) => {
    const courierId = req.params.id;
    try {
        const courier = await Courier.findById(courierId);
        res.json(courier);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.registerCourier = async (req, res) => {
    const newCourier = new Courier(req.body);
    try {
        const savedCourier = await newCourier.save();
        res.status(201).json(savedCourier);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateCourierDetails = async (req, res) => {
    const courierId = req.params.id;
    try {
        const updatedCourier = await Courier.findByIdAndUpdate(courierId, req.body, { new: true });
        res.json(updatedCourier);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deactivateCourier = async (req, res) => {
    const courierId = req.params.id;
    try {
        const removedCourier = await Courier.findByIdAndRemove(courierId);
        res.json(removedCourier);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getAssignedOrders = async (req, res) => {
    const courierId = req.params.id;
    // Assuming that your Courier model has an "orders" field that holds an array of assigned orders
    try {
        const courier = await Courier.findById(courierId).populate('orders'); // Use .populate to also get the details of the orders
        res.json(courier.orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateOrderStatus = async (req, res) => {
    // This function depends on your Order model and how you're storing the couriers' orders
    // So I'll leave it blank for now
};
