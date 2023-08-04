"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
// importing modules
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
// details from the env
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
// connection string to mongoDB atlas
const connectionString = `mongodb+srv://${username}:${password}@cluster0.85fxdxq.mongodb.net/${dbName}`;
const options = {
    useNewUrlParser: true,
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4 // Use IPv4, skip trying IPv6
};
// db connection
exports.db = mongoose_1.default.connect(connectionString, options)
    .then(res => {
    if (res) {
        console.log(`Successfully Connecting Database to ${dbName}`);
    }
})
    .catch(err => {
    console.log(err);
});
