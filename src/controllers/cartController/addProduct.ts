
import { Request, Response } from "express";

import models from '../../models';



async function addProduct( req: Request, res: Response ) {
    try{
        const { product_id } = req.params;
        const amount = req.body.amount || 1;
        const { id: user_id } = res.locals.user;

        const product = await models.Product.findByPk(product_id);

        if( amount > product?.getDataValue('amount'))
            return res.status(400).json({
                message: 'Quantidade não disponível em estoque.'
            });
        
        const cart = await models.Cart.create({
            product_id,
            user_id,
            amount
        });

        return res.status(201).json(cart);
    }catch(err) {
        return res.status(500).json({
            message: err
        });
    }
}

export default addProduct;
