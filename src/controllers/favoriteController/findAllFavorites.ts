
import {  Request, Response } from 'express';

import models from '../../models';



async function findAllFavorites( req: Request, res: Response ) {
    try {
        const { limit, offset, page } = res.locals;
        const { id } = res.locals.user;

        const favorites = await models.Favorite.findAll({
            where: { user_id: id },
            limit, offset,
            include: {
                model: models.Product
            }
        });

        const count = await models.Favorite.count({
            where: { user_id: id }
        });

        return res.status(200).json({
            limit, offset, page, count,
            favorites
        });
    }catch(err) {
        return res.status(500).json(err);
    }
}

export default findAllFavorites;
