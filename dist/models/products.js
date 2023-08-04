"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.productSchemaValidate = void 0;
// importing modules
const mongoose_1 = require("mongoose");
const joi_1 = __importDefault(require("joi"));
// validation schema
exports.productSchemaValidate = joi_1.default.object({
    title: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    published: joi_1.default.boolean().required()
});
;
// testimonial schema
const productSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    published: {
        type: Boolean,
        required: true,
        default: false
    }
});
// creating a model
exports.Product = (0, mongoose_1.model)("Product", productSchema);
