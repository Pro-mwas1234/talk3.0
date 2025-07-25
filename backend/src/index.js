
console.log("ENV VARIABLES:", {
  MONGO_URI: process.env.MONGO_URI ? "✅ Loaded" : "❌ Missing",
  PORT: process.env.PORT
});
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';


dotenv.config();

const app = express();

const PORT = process.env.PORT

app.use(express.json());
app.use(cookieParser()); 
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
));

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})  
