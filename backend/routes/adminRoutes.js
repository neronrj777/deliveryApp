const express = require('express');
const router = express.Router();

// Import your admin controller here
 const adminController = require('../controllers/adminController');

// Get all users
router.get('/users', (req, res) => {
     adminController.getAllUsers(req, res);
    res.send("Get all users");
});

// Get specific user details
router.get('/users/:id', (req, res) => {
     adminController.getUserDetails(req, res);
    res.send("Get user details");
});

// Update user details
router.put('/users/:id', (req, res) => {
     adminController.updateUserDetails(req, res);
    res.send("Update user details");
});

// Deactivate a user account
router.delete('/users/:id', (req, res) => {
     adminController.deactivateUser(req, res);
    res.send("Deactivate user account");
});

// Get all orders
router.get('/orders', (req, res) => {
     adminController.getAllOrders(req, res);
    res.send("Get all orders");
});

// Get specific order details
router.get('/orders/:orderId', (req, res) => {
     adminController.getOrderDetails(req, res);
    res.send("Get order details");
});

// Update order details
router.put('/orders/:orderId', (req, res) => {
     adminController.updateOrderDetails(req, res);
    res.send("Update order details");
});

// Cancel an order
router.delete('/orders/:orderId', (req, res) => {
     adminController.cancelOrder(req, res);
    res.send("Cancel order");
});

module.exports = router;
