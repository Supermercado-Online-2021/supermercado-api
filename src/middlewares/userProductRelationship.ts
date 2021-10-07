
import { Request, Response } from "express";

import models from '../models';

import Product from '../types/Product';



function productIsFavorite( user_id: number, product: Product ): Promise<Product> { 
    return new Promise( async ( resolve, reject ) => {
        try {
            const favorite = await models.Favorite.findOne({
                where: { 
                    user_id, 
                    product_id: product.id 
                }
            });

            resolve({ 
                ...product,
                favorite: favorite ? true: false 
            });
        } catch(err) {
            reject(err);
        }
    });
}

async function productsAreFavorites( user_id: number, products: Product[]) {
    const promises: Promise<Product>[] = products
                .map( product => productIsFavorite( user_id, product ) ) || [];

    return await Promise.all(promises);
}

async function userProductRelationshipMiddleware( req: Request, res: Response ) {
    const { auth, user, data } = res.locals;

    if(auth) {
        const products = await productsAreFavorites( user.id, (data as Product[]) );
        return res.status(200).json({
            ...res.locals,
            data: products
        });
    }
    
    return res.status(200).json({ ...res.locals });
}

export default userProductRelationshipMiddleware;
