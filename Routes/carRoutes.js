import express from 'express';
import { createCar } from '../Controllers/carController.js';
import { authenticateToken } from '../Middleware/authMiddleware.js';

const router = express.Router();


router.post('/', authenticateToken, createCar);


export default router; 