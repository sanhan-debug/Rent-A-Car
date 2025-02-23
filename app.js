import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './Routes/authRoutes.js';
import carRoutes from './Routes/carRoutes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

const PORT = 3002;

app.use('/api/auth', authRoutes);
app.use('/api/cars', carRoutes);


app.get('/', (req, res) => {
    res.send(' express ');
});


app.listen(PORT, () => {
    console.log(`Server ${PORT} is running`);

    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB has been connected successfully');
    })
    .catch((err) => {
        console.log("MongoDB has't been connected:", err);
    });
});
