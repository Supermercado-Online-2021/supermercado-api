
import { Request, Response } from "express";

import models from '../../models';



async function removeAddress( req: Request, res: Response ) {
    try{
        const {id} = req.params;
        const { user } = res.locals;

        const address = await models.Address.findOne({
            where: {
                id,
                user_id: user.id
            }
        });
        
        if(address) {
            const destroy = await address.destroy();
            return res.status(200).json(destroy);
        }

        return res.status(404).json({
            message: "Endereço não encontrado"
        });
    }catch(err) {
        return res.status(500).json({
            message: "Erro interno no servidor"
        });
    }
}

export default removeAddress;
