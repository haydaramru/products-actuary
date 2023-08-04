"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// importing modules
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller");
// initializing the router
exports.router = express_1.default.Router();
// add post route
exports.router.post("/", product_controller_1.ProductController.addProduct);
// get posts
exports.router.get("/", product_controller_1.ProductController.getProducts);
// get single post
exports.router.get("/:id", product_controller_1.ProductController.getAProduct);
// update a post
exports.router.put("/:id", product_controller_1.ProductController.updateProduct);
// delete a post
exports.router.delete("/:id", product_controller_1.ProductController.deleteProduct);
