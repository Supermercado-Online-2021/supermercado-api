
import { Request, Response } from 'express';

import models from '../../models/';



async function findAllProducts( req: Request, res: Response ) {
    try {
        const { limit, offset, page, attributes, fields } = res.locals;
        
        const data = await models.Product.findAll({
            limit,
            offset,
            attributes,
            include: fields.some( (f:string) => f==='category' ) 
                ? { model: models.Category }
                : undefined
        });

        return res.status(200).json({
            limit, offset, page, data
        });
    } catch(err) {
        return res.status(503).json(err);
    }
}

export default findAllProducts;
