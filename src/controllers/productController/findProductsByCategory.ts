
import { Request, Response } from "express";

import models from '../../models/'



async function findProductsByCategory( req: Request, res: Response ) {
    try {
        const { category_id } = req.params;
        const { limit, offset, page, attributes, fields } = res.locals;

        const data = await models.Product.findAll({
            where: { category_id },
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

export default findProductsByCategory;
