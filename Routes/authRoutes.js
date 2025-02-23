import express from 'express';
import { register, login, getCurrentUser } from '../Controllers/userController.js';
import { authenticateToken } from '../Middleware/authMiddleware.js';

const router = express.Router();


router.post('/register', register);
router.post('/login', login);
router.get('/profile', authenticateToken, getCurrentUser);

export default router; 