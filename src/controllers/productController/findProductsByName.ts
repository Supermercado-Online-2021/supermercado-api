 
import { Op } from "sequelize";
import { Request, Response } from 'express';

import models from '../../models/';



async function findProductsByName( req: Request, res: Response ) {
    try {
        const { limit, offset, page, attributes, fields } = res.locals;
        const { name } = req.params;

        const data = await models.Product.findAll({
            where: typeof name === 'string'
                ? { nome: { [Op.like]: `%${name}%` } }
                : undefined,
            limit, offset, attributes,
            include: fields.some( (f:string) => f==='category' ) 
                ? { model: models.Category }
                : undefined
        });

        return res.status(200).json({
            limit, offset, page, term: name, data
        });
    } catch(err) {
        return res.status(503).json(err);
    }
}

export default findProductsByName;