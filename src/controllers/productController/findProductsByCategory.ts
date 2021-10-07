
import { NextFunction, Request, Response } from "express";

import models from '../../models/';



async function findProductsByCategory( req: Request, res: Response, next: NextFunction ) {
    try {
        const { category_id } = req.params;
        const { limit, offset, page, attributes, fields } = res.locals;
        const { auth, user } = res.locals;

        const { rows: data, count } = await models.Product.findAndCountAll({
            where: { category_id },
            limit,
            offset,
            attributes: [ 'id', ...attributes ],
            include: fields.some( (f:string) => f==='category' ) 
                ? { model: models.Category }
                : undefined,
            raw: true,
            nest: true
        });


        res.locals = {
            data, auth, user,
            limit, offset, page, count
        };

        return next();
    } catch(err) {
        return res.status(503).json(err);
    }
}

export default findProductsByCategory;
