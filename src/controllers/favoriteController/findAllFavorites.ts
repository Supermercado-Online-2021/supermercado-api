
import {  Request, Response } from 'express';

import models from '../../models';



async function findAllFavorites( req: Request, res: Response ) {
    try {
        const { limit, offset, page, include } = res.locals;
        const { id } = res.locals.user;

        const { rows: data, count } = await models.Favorite.findAndCountAll({
            where: { user_id: id },
            limit, offset,
            include: {
                model: models.Product,
                include: [
                    ...include
                ]
            },
            raw: true,
            nest: true
        });

        return res.status(200).json({
            limit, offset, page, count,
            data
        });
    }catch(err) {
        return res.status(500).json(err);
    }
}

export default findAllFavorites;
