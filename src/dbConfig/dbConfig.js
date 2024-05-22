import mongoose from 'mongoose';

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export async function connect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGO_URI).then((mongoose) => {
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error. Please make sure MongoDB is running.', error);
        cached.promise = null;
        throw error;
    }

    return cached.conn;
}
