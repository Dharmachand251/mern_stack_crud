import express from "express"
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors';
//import morgan from 'morgan';
//import helmet from 'helmet';
import routes from './routes/index.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern_stack_crud';
mongoose.connect(MONGODB_URI).then(() => {
        //console.log('Connected to MongoDB');
        app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
    }).catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    });

   
// Middleware
    app.use('/api', routes);