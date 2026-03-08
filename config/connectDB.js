import mongoose from "mongoose";
import dotenv from 'dotenv'
import dns from 'node:dns/promises'

dns.setServers(["1.1.1.1", "8.8.8.8"]);
dotenv.config()

if (!process.env.MONGODB_URI) {
    throw new Error(
        "Please provide MONGODB_URI in the .env file"
    )
}

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connect DB")
    } catch (error) {
        console.log("Mongodb connect error", error)
        throw error   // Don't call process.exit() — it crashes serverless functions
    }
}

export default connectDB