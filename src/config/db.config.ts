// importing modules
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

// details from the env
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

// connection string to mongoDB atlas
const connectionString = `mongodb+srv://${username}:${password}@cluster0.85fxdxq.mongodb.net/${dbName}`;

const options = {
    useNewUrlParser: true,
    autoIndex: false,                   // Don't build indexes
    maxPoolSize: 10,                    // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000,     // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000,             // Close sockets after 45 seconds of inactivity
    family: 4                           // Use IPv4, skip trying IPv6
};

// db connection
export const db = mongoose.connect(connectionString, options)
    .then(res => {
        if(res) {
            console.log(`Successfully Connecting Database to ${dbName}`);
        }
    })
    .catch(err => {
        console.log(err);
    });