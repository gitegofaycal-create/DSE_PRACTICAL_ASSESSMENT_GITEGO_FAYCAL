
const express = require('express');
const router = express.Router();
const {
    recordEntry,
    recordExit,
    getParkedVehicles,
    getParkingHistory,
    getMyParkingRecords
} = require('../controllers/parkingController');
const { authMiddleware, isParkingManager } = require('../middleware/auth');
const { entryValidation, validateRequest } = require('../middleware/validation');


router.post('/entry', authMiddleware, isParkingManager, entryValidation, validateRequest, recordEntry);
router.put('/exit/:recordId', authMiddleware, isParkingManager, recordExit);
router.get('/parked-vehicles', authMiddleware, isParkingManager, getParkedVehicles);
router.get('/history', authMiddleware, isParkingManager, getParkingHistory);


router.get('/my-records', authMiddleware, getMyParkingRecords);

module.exports = router;

