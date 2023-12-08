const express = require('express');
const router = express.Router();

// Import your customer controller here const 
customerController = require('../controllers/customerController');

// Retrieve customer details
router.get('/:id', (req, res) => {
    customerController.getCustomerDetails(req, res);
    res.send("Customer details");
});

// Create a new customer
router.post('/', (req, res) => {
     customerController.createCustomer(req, res);
    res.send("Create new customer");
});

// Update customer details
router.put('/:id', (req, res) => {
     customerController.updateCustomerDetails(req, res);
    res.send("Update customer details");
});

// Delete a customer account
router.delete('/:id', (req, res) => {
     customerController.deleteCustomer(req, res);
    res.send("Delete customer account");
});

// Place a new order
router.post('/:id/orders', (req, res) => {
     customerController.placeNewOrder(req, res);
    res.send("Place new order");
});

// Get order history for a customer
router.get('/:id/orders', (req, res) => {
     customerController.getOrderHistory(req, res);
    res.send("Get order history");
});

// Get details about a specific order
router.get('/:id/orders/:orderId', (req, res) => {
     customerController.getOrderDetails(req, res);
    res.send("Get order details");
});

// Update a specific order
router.put('/:id/orders/:orderId', (req, res) => {
     customerController.updateOrder(req, res);
    res.send("Update order");
});

module.exports = router;
