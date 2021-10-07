
import Category from "./Category";



export default interface Product {
    id ?: number,
    nome ?: string,
    preco ?: number,
    quantidade ?: number,
    image_src ?: string,
    codigo_barras ?: string,
    category_id ?: number,
    favorite ?: boolean,
    Category ?: Category
}
