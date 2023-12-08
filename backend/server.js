const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customerRoutes');
const courierRoutes = require('./routes/courierRoutes');
const adminRoutes = require('./routes/adminRoutes');

const URI = 'mongodb+srv://neronrj777:niraj123@cluster1deliveryapp.uzt6e9k.mongodb.net/?retryWrites=true&w=majority';

const app = express();
const PORT = process.env.PORT || 4001;
app.use(express.json());


app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Could not connect to MongoDB', error));



    app.use(cors());
    app.use(bodyParser.json());
    app.use('/', customerRoutes);
    app.use('/customers', customerRoutes);
    app.use('/couriers', courierRoutes);
    app.use('/admins', adminRoutes);
    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

    