import { ProductModel } from "../models/product.model";
import { ProductDto } from "../dto/product.dto";

export const browse = async () : Promise<ProductDto[]> => {
    const resultLimit: number = parseInt(process.env.RESULT_LIMIT) || 25;
    try{
        let products: ProductDto[] = await ProductModel.find().limit(resultLimit);
        return products;
    } catch(error){
        console.log(`Unable to read a products from the collection.`);
        console.log(error);
    }
}

export const read = async (productId: string) : Promise<ProductDto>=> {
    try{
        let product: ProductDto = await ProductModel.findById({
            _id: productId
        });
        return product;
    } catch(error){
        console.log(`Unable to read a product ${productId} from the collection.`);
        console.log(error);
    }
}