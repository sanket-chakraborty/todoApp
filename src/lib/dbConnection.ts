import mongoose from "mongoose";

let isConnected: boolean = false;

async function dbConnect(): Promise<void> {
    if (isConnected) {
        console.log('Already connected to the database.');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI || '', {});

        isConnected = true;

        console.log('DB connected successfully');
    } catch (error) {
        console.error("DB connection failed:", error);
        throw new Error('Unable to connect to the database.');
    }
}

export default dbConnect;
