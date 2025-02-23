import { validationResult } from 'express-validator';
import { validateCar } from '../Model/carModel.js';


export const createCar = [
    validateCar,
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
]; 