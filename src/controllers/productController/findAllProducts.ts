
import { Request, Response, NextFunction } from 'express';
import { Model } from 'sequelize/types';

import models from '../../models/';





async function findAllProducts( req: Request, res: Response, next: NextFunction ) {
    try {
        const { limit, offset, page, attributes, fields } = res.locals;
        const { auth, user, include } = res.locals;

        const { rows: data, count } = await models.Product.findAndCountAll({
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

export default findAllProducts;
