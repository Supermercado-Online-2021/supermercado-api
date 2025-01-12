
import { Request, Response } from 'express';

import models from '../../models/';



async function findProductByPk( req: Request, res: Response ) {
    try {
        const { id } = req.params;
        const { fields, attributes, include } = res.locals;

        const data = await models.Product.findByPk(id, {
            attributes,
            include,
            raw: true,
            nest: true
        });

        if(!data) {
            return res
                .status(404)
                .json({
                    message: 'Produto não encontrado'
                });
        }

        return res.status(200).json(data);
    } catch(err) {
        return res.status(503).json(err);
    }
}



export default findProductByPk;
