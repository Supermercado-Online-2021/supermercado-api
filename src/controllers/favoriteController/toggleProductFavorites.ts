
import { Request, Response } from 'express';

import models from '../../models';



async function toggleProductFavorites( req: Request, res: Response ) {
    try {
        const { product_id } = req.params;
        const { id } = res.locals.user;

        const findFavoritedProduct = await models.Favorite.findOne({
            where: { 
                user_id: id,
                product_id
            }
        });

        if( findFavoritedProduct ) {
            findFavoritedProduct.destroy();

            return res.status(200).json({
                id: null,
                product_id: null,
                user_id: null
            });
        } else {
            const favorite = await models.Favorite.create({
                user_id: id,
                product_id
            });
    
            res.status(201).json(favorite);
        }
    } catch(err) {
        return res.status(500).json(err);
    }
}

export default toggleProductFavorites;
