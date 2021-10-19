
import { NextFunction, Request, Response } from "express";

import models from '../../models/';



async function findProductsByCategory( req: Request, res: Response, next: NextFunction ) {
    try {
        const { category_id } = req.params;
        const { limit, offset, page, attributes, fields } = res.locals;
        const { auth, user, include } = res.locals;

        const { rows: data, count } = await models.Product.findAndCountAll({
            where: { category_id },
            limit,
            offset,
            attributes: [ 'id', ...attributes ],
            include,
            raw: true,
            nest: true
        });


        return res.status(200).json({
            data, auth, user,
            limit, offset, page, count
        });
    } catch(err) {
        return res.status(503).json(err);
    }
}

export default findProductsByCategory;
