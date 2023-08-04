// importing modules
import { Schema, model } from "mongoose";
import Joi from "joi";

// validation schema
export const productSchemaValidate = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    published: Joi.boolean().required()
});

// creating an interface
interface productInterface {
    title: string,
    description: string,
    published: boolean
};

// testimonial schema
const productSchema = new Schema<productInterface>({
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
export const Product = model<productInterface>("Product", productSchema);