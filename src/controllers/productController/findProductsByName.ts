 
import { Op } from "sequelize";
import { NextFunction, Request, Response } from 'express';

import models from '../../models/';



async function findProductsByName( req: Request, res: Response, next: NextFunction ) {
    try {
        const { limit, offset, page, attributes, fields } = res.locals;
        const { auth, user, include } = res.locals;
        const { name } = req.params;

        const { rows: data, count } = await models.Product.findAndCountAll({
            where: typeof name === 'string'
                ? { name: { [Op.like]: `%${name}%` } }
                : undefined,
            limit,
            offset,
            attributes: [ 'id', ...attributes ],
            include: [ ...include ],
            raw: true,
            nest: true
        });

        return res.status(200).json({
            data, auth, user,
            limit, offset, page, count, term: name
        });
    } catch(err) {
        return res.status(503).json(err);
    }
}

export default findProductsByName;