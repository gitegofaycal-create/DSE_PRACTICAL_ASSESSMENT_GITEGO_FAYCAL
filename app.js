
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();


const authRoutes = require('./routes/authRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const parkingRoutes = require('./routes/parkingRoutes');
const reportRoutes = require('./routes/reportRoutes');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/auth', authRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/parking', parkingRoutes);
app.use('/api/reports', reportRoutes);


app.get('/', (req, res) => {
    res.json({ 
        message: 'Nyabugogo Smart Complex Parking Management System API',
        version: '1.0.0',
        status: 'Active'
    });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!', details: err.message });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Parking Management System running on port ${PORT}`);
});