const Admin = require('../models/adminModels'); // Import your Admin model here

exports.getAdminDetails = async (req, res) => {
    const adminId = req.params.id;
    try {
        const admin = await Admin.findById(adminId);
        res.json(admin);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.registerAdmin = async (req, res) => {
    const newAdmin = new Admin(req.body);
    try {
        const savedAdmin = await newAdmin.save();
        res.status(201).json(savedAdmin);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateAdminDetails = async (req, res) => {
    const adminId = req.params.id;
    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(adminId, req.body, { new: true });
        res.json(updatedAdmin);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deactivateAdmin = async (req, res) => {
    const adminId = req.params.id;
    try {
        const removedAdmin = await Admin.findByIdAndRemove(adminId);
        res.json(removedAdmin);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
