import { Router, Request, Response }  from 'express';
import { SortMode } from 'src/utils/types';
import { ProductDto } from '../dto/product.dto';
import { fetchAllProducts, fetchProductById, sortProductsByTitle } from '../services/product.service';

export const productRoutes = Router();

productRoutes.get('/healthcheck', (request: Request, response: Response) => {
    return response.status(200).send( "API healthy!");
});

productRoutes.get('/browse',async (request: Request, response: Response) => {
    try{
        const sortMode = (request.query?.sortMode as SortMode); 
        let productList: ProductDto[] = await fetchAllProducts();
        let sortedProductList: ProductDto[] = sortProductsByTitle(productList, sortMode);
        response.status(200).json(sortedProductList);  
    } catch(error){
        response.status(500).send(error);
    }
});

productRoutes.get('/:id',async (request: Request, response: Response) => {
    try{
        const productId: string = request.params?.id;
        let product: ProductDto = await fetchProductById(productId);
        response.status(200).json(product);  
    } catch(error){
        response.status(500).send(error);
    }
});

