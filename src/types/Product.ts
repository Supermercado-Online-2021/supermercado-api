
import Category from "./Category";



export default interface Product {
    id ?: number,
    name ?: string,
    price ?: number,
    amount ?: number,
    image_src ?: string,
    code_bar ?: string,
    category_id ?: number,
    favorite ?: boolean,
    Category ?: Category
}
