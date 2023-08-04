import express from "express";
import { db } from "../config/db.config";
import { router } from "../routes/product.routes";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/our-products/", router);

// db connection then server connection
db.then(() => {
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    })
});