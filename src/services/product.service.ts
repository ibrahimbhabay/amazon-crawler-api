import { SortMode } from "../utils/types";
import { ProductDto } from "../dto/product.dto";
import { browse, read } from "../repository/product.repository"

export const fetchProductById = async (productId: string) : Promise<ProductDto> => {
    return await read(productId);
}

export const fetchAllProducts = async () : Promise<ProductDto[]> => {
    return await browse();
}

export const sortProductsByTitle = (productList: ProductDto[], mode: SortMode = 'asc') : ProductDto[] => {
    console.log(`sort mode: ${mode}`);
    let sortedProductList: ProductDto[] = [];
    if(mode === 'asc'){
        sortedProductList = productList.sort( (product1, product2) => product1?.title?.localeCompare(product2?.title));
    }else if(mode === 'desc') {
        sortedProductList = productList.sort( (product1, product2) => product2?.title?.localeCompare(product1?.title));
    }
    return productList;
}