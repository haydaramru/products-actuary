"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
// import modules
const product_service_1 = require("../services/product.service");
const products_1 = require("../models/products");
class productController {
    constructor() {
        // add testimonies controller
        this.addProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // data to be saved in database
            const data = {
                title: req.body.title,
                description: req.body.description,
                published: req.body.published
            };
            // validating the request
            const { error, value } = products_1.productSchemaValidate.validate(data);
            if (error) {
                res.send(error.message);
            }
            else {
                // call the create post function in the service and pass the data from the request
                const product = yield product_service_1.productServices.createProducts(value);
                res.status(201).send(product);
            }
        });
        // get all testimonies
        this.getProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const products = yield product_service_1.productServices.getProducts();
            res.send(products);
        });
        // get a single testimonies
        this.getAProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // get id from the parameter
            const id = req.params.id;
            const testimonial = yield product_service_1.productServices.getProduct(id);
            res.send(testimonial);
        });
        // update testimonies
        this.updateProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const testimonial = yield product_service_1.productServices.updateProduct(id, req.body);
            res.send(testimonial);
        });
        // delete a testimonies
        this.deleteProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield product_service_1.productServices.deleteProduct(id);
            res.send("Testimonies deleted");
        });
    }
}
// export class
exports.ProductController = new productController();
