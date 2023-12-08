const express = require('express');
const router = express.Router();

// Import your courier controller here
 const courierController = require('../controllers/courierController');

// Retrieve courier details
router.get('/:id', (req, res) => {
     courierController.getCourierDetails(req, res);
    res.send("Courier details");
});

// Register a new courier
router.post('/', (req, res) => {
     courierController.registerCourier(req, res);
    res.send("Register new courier");
});

// Update courier details
router.put('/:id', (req, res) => {
     courierController.updateCourierDetails(req, res);
    res.send("Update courier details");
});

// Deactivate a courier account
router.delete('/:id', (req, res) => {
     courierController.deactivateCourier(req, res);
    res.send("Deactivate courier account");
});

// Get list of orders assigned to a courier
router.get('/:id/orders', (req, res) => {
     courierController.getAssignedOrders(req, res);
    res.send("Get assigned orders");
});

// Update the status of an order
router.put('/:id/orders/:orderId', (req, res) => {
     courierController.updateOrderStatus(req, res);
    res.send("Update order status");
});

module.exports = router;
