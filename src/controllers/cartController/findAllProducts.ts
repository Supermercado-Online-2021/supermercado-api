
import { Request, Response } from "express";
import models from "../../models";



async function findAllProducts( req: Request, res: Response ) {
    try{
        const { id: user_id } = res.locals.user;
        const { page, limit, offset } = res.locals;

        const { rows, count } = await models.Cart.findAndCountAll({
            where: { user_id },
            include: {
                model: models.Product,
                foreignKey: 'product_id'
            }
        });

        return res.status(200).json({
            data: rows,
            page, limit, offset, count
        });
    }catch(err) {
        return res.status(500).json({
            message: err
        })
    }
}

export default findAllProducts;
