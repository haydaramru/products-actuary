// import module
import { Product } from "../models/products";
export class productService {

    // create a products
    async createProducts(data: any) {
        try {
            const newProducts = await Product.create(data);
            return newProducts;
        }
        catch (error) {
            console.log(error);
        }
    }

    // get all products
    async getProducts() {
        try {
            const products = await Product.find({});
            return products;
        }
        catch (error) {
            console.log(error);
        }
    }

    // get a single product
    async getProduct(id: string) {
        try {
            const product = await Product.findById({_id: id})
            if(!product) {
                return "Product not available :("
            }
            return product
        }
        catch (error) {
            console.log(error);
        }
    }

    // update a product
    async updateProduct(id: string, data: any) {
        try {
            // pass the id of the object you want to update
            // data is for the new body you are updating the old one with
            // new:true, so the data being returned, is the updated one
            const productz = await Product.findByIdAndUpdate({_id: id}, data, {new: true})
            if(!productz) {
                return "Product not available :("
            }
            return productz
        }
        catch (error) {
            console.log(error);
        }
    }

    // delete a product by using find by id and delete
    async deleteProduct(id: string) {
        try {
            const product = await Product.findByIdAndDelete(id)
            if(!product) {
                return "Product not available :("
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}

// export the class
export const productServices = new productService();