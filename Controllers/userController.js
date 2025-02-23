import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import User from '../Model/userModel.js';
import { validateUser } from '../Model/userModel.js';



export const register = [
    validateUser,
    async (req, res) => {
        try {
            
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { username, email, password } = req.body;


            const existingUser = await User.findOne({ email });

            if (existingUser) {
                return res.status(400).json({
                    message: 'User with this email  already exists'
                });
            }


            const user = new User({
                username,
                email,
                password
            });

            await user.save();


            await sendWelcomeEmail(email, username);

            // JWT token
            const token = jwt.sign(
                { userId: user._id },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            res.status(201).json({
                message: 'User registered successfully',
                token,
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email
                },
                redirect: '/'
            });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
];

// Login user
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

    
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        //  password yoxlama
        const isValidPassword = await user.comparePassword(password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        //  Jwt token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// user profile
export const getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
