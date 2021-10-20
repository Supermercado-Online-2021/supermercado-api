
import { Request, Response } from "express";
import models from "../../models";



async function removeProduct( req: Request, res: Response ) {
    try{
        const { id } = req.params;
        const { id: user_id } = res.locals.user;

        const result = await models.Cart.findOne({
            where: { id, user_id }
        });

        if(result) {
            result.destroy();
            return res.status(200).json(result);
        }

        return res.status(404).json({
            message: "Não foi possível remover do carrinho."
        })
    }catch(err) {
        return res.status(500).json({
            message: err
        })
    }
}

export default removeProduct;
