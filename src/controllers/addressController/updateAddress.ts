import { Request, Response } from "express";

import models from '../../models';



async function updateAddress(req: Request, res: Response) {
    try{
        const { id } = req.params;
        const { user } = res.locals;

        const result = await models.Address.findOne({
            where: {
                id,
                user_id: user.id
            }
        });

        if (result) {
            result.update({ ...req.body });
            return res.status(200).json(result);
        }
            
        return res.status(404).json({ message: "Endereço não encontrado." });
    }catch(err) {
        return res.status(500).json({ message: err });
    }
}

export default updateAddress;
