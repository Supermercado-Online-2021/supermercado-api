
import { Request, Response } from "express";

import models from '../../models';



async function removeAddress( req: Request, res: Response ) {
    const {id} = req.params;
    const { user } = res.locals;

    const address = await models.Address.findOne({
        where: {
            id,
            user_id: user.id
        }
    });
    
    if(address) {
        address.destroy();
        return res.status(200).json(address);
    }

    return res.status(404).json({
        message: "Endereço não encontrado"
    })
}

export default removeAddress;
