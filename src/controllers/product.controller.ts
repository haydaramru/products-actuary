// import modules
import { productServices } from "../services/product.service";
import { Request, Response } from "express";
import { productSchemaValidate } from "../models/products";

class productController {
    
    // add testimonies controller
    addProduct = async (req: Request, res: Response) => {
        
        // data to be saved in database
        const data = {
            title: req.body.title,
            description: req.body.description,
            published: req.body.published
        }

        // validating the request
        const { error, value } = productSchemaValidate.validate(data);

        if(error) {
            res.send(error.message);
        } else {
            // call the create post function in the service and pass the data from the request
            const product = await productServices.createProducts(value)
            res.status(201).send(product)
        }
    }

    // get all testimonies
    getProducts = async (req: Request, res: Response) => {
        const products = await productServices.getProducts();
        res.send(products);
    }

    // get a single testimonies
    getAProduct = async (req: Request, res: Response) => {
        // get id from the parameter
        const id = req.params.id;
        const testimonial = await productServices.getProduct(id);
        res.send(testimonial)
    }

    // update testimonies
    updateProduct = async (req: Request, res: Response) => {
        const id = req.params.id;
        const testimonial = await productServices.updateProduct(id, req.body);
        res.send(testimonial)
    }

    // delete a testimonies
    deleteProduct = async (req: Request, res: Response) => {
        const id = req.params.id;
        await productServices.deleteProduct(id)
        res.send("Testimonies deleted")
    }
}

// export class
export const ProductController = new productController();