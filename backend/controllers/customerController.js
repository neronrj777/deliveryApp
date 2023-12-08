const Customer = require('../models/customerModels');

exports.createCustomer = async (req, res) => {
    try {
        const newCustomer = new Customer(req.body);
        const result = await newCustomer.save();
        res.status(201).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getCustomerDetails = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        res.send(customer);
    } catch (error) {
        res.status(500).send(error);
    }
};


exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (customer == null) {
            return res.status(404).json({ message: 'Cannot find customer' });
        }
        res.json(customer);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

exports.registerCustomer = async (req, res) => {
    const newCustomer = new Customer(req.body);
    try {
        const savedCustomer = await newCustomer.save();
        res.status(201).json(savedCustomer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateCustomerById = async (req, res) => {
    try {
        const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCustomer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteCustomerById = async (req, res) => {
    try {
        await Customer.findByIdAndDelete(req.params.id);
        res.json({ message: 'Customer has been deleted' });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
