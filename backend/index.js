import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

  dotenv.config();

    const app = express();
    const port = process.env.PORT || 8000;

    const corsOptions = {
        origin: true,
    };

    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    //database connection
    mongoose.set("strictQuery", false);
    const connectDB = async () => {
        try {
            await mongoose.connect(process.env.MONGO_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log('MongoDB connection SUCCESS');
        } catch (err) {
            console.error('MongoDB connection FAIL:', err);
        }
    };

    //middlewares
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors(corsOptions));

    
    // app.use('/api/v1/auth', authRoute); 
    // app.use('/api/v1/users', userRoute);
    // app.use('/api/v1/doctors', doctorRoute);
    // app.use('/api/v1/reviews', reviewRoute);


    // console.log(`PORT: ${PORT}`);
    app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`)
    }
);