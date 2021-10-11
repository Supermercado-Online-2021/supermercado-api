 
import { Op } from "sequelize";
import { NextFunction, Request, Response } from 'express';

import models from '../../models/';



async function findProductsByName( req: Request, res: Response, next: NextFunction ) {
    try {
        const { limit, offset, page, attributes, fields } = res.locals;
        const { auth, user } = res.locals;
        const { name } = req.params;

        const { rows: data, count } = await models.Product.findAndCountAll({
            where: typeof name === 'string'
                ? { name: { [Op.like]: `%${name}%` } }
                : undefined,
            limit,
            offset, 
            attributes,
            include: fields.some( (f:string) => f==='category' ) 
                ? { model: models.Category }
                : undefined,
            raw: true,
            nest: true
        });

        res.locals = {
            data, auth, user, term: name,
            limit, offset, page, count
        };

        return next();
    } catch(err) {
        return res.status(503).json(err);
    }
}

export default findProductsByName;