
import { Request, Response, NextFunction } from 'express';
import { Includeable } from 'sequelize/types';

import models from '../../models/';



async function findAllProducts( req: Request, res: Response, next: NextFunction ) {
    try {
        const { limit, offset, page, attributes, fields } = res.locals;
        const { auth, user } = res.locals;

        const { rows: data, count } = await models.Product.findAndCountAll({
            limit,
            offset,
            attributes: [ 'id', ...attributes ],
            include: fields.some( (f:string) => f==='category' ) 
                ? { model: models.Category } as Includeable
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

export default findAllProducts;
