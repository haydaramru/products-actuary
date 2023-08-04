"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_config_1 = require("../config/db.config");
const product_routes_1 = require("../routes/product.routes");
const app = (0, express_1.default)();
// middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// routes
app.use("/our-products/", product_routes_1.router);
// db connection then server connection
db_config_1.db.then(() => {
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
});
