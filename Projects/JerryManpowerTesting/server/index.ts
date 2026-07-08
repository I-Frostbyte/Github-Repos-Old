import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors"
import dotenv from "dotenv";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import jobSeekerRoutes from "./routes/jobSeeker"

// For env file
dotenv.config();

/* CONFIGURATION */
const app: Application = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/job_seekers", jobSeekerRoutes)

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 8000;
mongoose.connect(process.env.MONGO_URL as string).then(() => {
    app.listen(PORT, () => {
        console.log('====================================');
        console.log(`Server is Live at http://localhost:${PORT}`);
        console.log('====================================');
    })
}).catch((error) => {
    console.log('====================================');
    console.log(`${error} did not connect`);
    console.log('====================================');
})
