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
exports.productServices = exports.productService = void 0;
// import module
const products_1 = require("../models/products");
class productService {
    // create a products
    createProducts(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newProducts = yield products_1.Product.create(data);
                return newProducts;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    // get all products
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield products_1.Product.find({});
                return products;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    // get a single product
    getProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield products_1.Product.findById({ _id: id });
                if (!product) {
                    return "Product not available :(";
                }
                return product;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    // update a product
    updateProduct(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // pass the id of the object you want to update
                // data is for the new body you are updating the old one with
                // new:true, so the data being returned, is the updated one
                const productz = yield products_1.Product.findByIdAndUpdate({ _id: id }, data, { new: true });
                if (!productz) {
                    return "Product not available :(";
                }
                return productz;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    // delete a product by using find by id and delete
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield products_1.Product.findByIdAndDelete(id);
                if (!product) {
                    return "Product not available :(";
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.productService = productService;
// export the class
exports.productServices = new productService();
