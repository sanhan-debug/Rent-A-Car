import mongoose from 'mongoose';
import { body } from 'express-validator';

const carSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: [true, 'Brand is required'],
        trim: true
    },
    model: {
        type: String,
        required: [true, 'Model is required'],
        trim: true
    },
    year: {
        type: Number,
        required: [true, 'Year is required'],
        min: [1900, 'Year cannot be less than 1900'],
        max: [new Date().getFullYear(), 'Year cannot be in the future']
    },
    mileage: {
        type: Number,
        required: [true, 'Mileage is required'],
        min: [0, 'Mileage cannot be negative']
    },
    images: [{
        type: String,
        required: [true, 'At least one image is required']
    }],
    dailyPrice: {
        type: Number,
        required: [true, 'Daily price is required'],
        min: [0, 'Price cannot be negative']
    },
    engineSize: {
        type: Number,
        required: [true, 'Engine size is required'],
        min: [0, 'Engine size cannot be negative']
    },
    fuelType: {
        type: String,
        required: [true, 'Fuel type is required'],
        enum: {
            values: ['Petrol', 'Diesel', 'Hybrid', 'Electric', 'Gas'],
            message: '{VALUE} is not a valid fuel type'
        }
    },
    isAutomatic: {
        type: Boolean,
        required: [true, 'Transmission type is required'],
        default: true
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        enum: {
            values: ['Economy', 'Business', 'Premium', 'Luxury'],
            message: '{VALUE} is not a valid category'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const validateCar = [
    body('brand')
        .trim()
        .notEmpty().withMessage('Brand is required')
        .isLength({ min: 2 }).withMessage('Brand must be at least 2 characters long'),

    body('model')
        .trim()
        .notEmpty().withMessage('Model is required')
        .isLength({ min: 1 }).withMessage('Model must be at least 1 character long'),

    body('year')
        .isInt({ min: 1900, max: new Date().getFullYear() })
        .withMessage(`Year must be between 1900 and ${new Date().getFullYear()}`),

    body('kilometers')
        .isFloat({ min: 0 })
        .withMessage('Kilometrs must be a positive number'),

    body('images')
        .isArray()
        .withMessage('Images must be an array')
        .notEmpty()
        .withMessage('At least one image is required'),

    body('dailyPrice')
        .isFloat({ min: 0 })
        .withMessage('Daily price must be a positive number'),

    body('engineSize')
        .isFloat({ min: 0 })
        .withMessage('Engine size must be a positive number'),

    body('fuelType')
        .isIn(['Petrol', 'Diesel', 'Hybrid', 'Electric', 'Gas'])
        .withMessage('Invalid fuel type'),

    body('isAutomatic')
        .isBoolean()
        .withMessage('Transmission type must be boolean'),

    body('category')
        .isIn(['Economy', 'Business', 'Premium', 'Luxury'])
        .withMessage('Invalid category')
];

const Car = mongoose.model('Car', carSchema);

export default Car;
