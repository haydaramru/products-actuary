import express from "express";
import { db } from "../config/db.config";
import { router } from "../routes/product.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/products", router);

db.then(() => {
    app.listen(8080, () => {
        console.log("Server is running on port 8080");
    })
});