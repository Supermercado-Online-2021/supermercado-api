
import { Request, Response } from "express";

import models from '../../models/';

import mergeAddress from '../../util/mergeAddressWithViaCEP';



async function findOne( req: Request, res: Response ) {
    try{
        const { id } = req.params;
        const address = await models.Address.findByPk(id);

        return address
            ? res
                .status(200)
                .json( await mergeAddress(address) )
            : res
                .status(404)
                .json({ message: "Endereço não encontrado." })
    }catch(e) {
        return res.status(500).json({
            message: "Erro interno do servidor"
        });
    }
}

export default findOne;
