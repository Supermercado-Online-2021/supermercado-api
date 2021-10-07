
import { Request, Response } from 'express';

import models from '../../models';



async function addProductFavorites( req: Request, res: Response ) {
    try {
        const { product_id } = req.params;
        const { id } = res.locals.user;

        const favorite = await models.Favorite.create({
            user_id: id,
            product_id
        });

        res.status(201).json(favorite);
    } catch(err) {
        return res.status(500).json(err);
    }
}

export default addProductFavorites;
