// importing modules
import express from "express";
import { ProductController } from "../controllers/product.controller";

// initializing the router
export const router = express.Router();

// add post route
router.post("/", ProductController.addProduct);

// get posts
router.get("/", ProductController.getProducts);

// get single post
router.get("/:id", ProductController.getAProduct);

// update a post
router.put("/:id", ProductController.updateProduct);

// delete a post
router.delete("/:id", ProductController.deleteProduct);