
import { Request, Response } from "express";

import models from '../../models';



async function  removeProductFavorites( req: Request, res: Response ) {
    try {
        const { id } = req.params;
        const { id: user_id } = res.locals.user;

        const remove = await models.Favorite.destroy({
            where: {
                id,
                user_id
            }
        });

        return res.status(200).json(remove);
    } catch(err) {
        return res.status(500).json(err);
    }
}

export default removeProductFavorites;
