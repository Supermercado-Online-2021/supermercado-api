import { Request, Response } from "express";

import models from '../../models/'



async function findAllAddresses( req: Request, res: Response ) {
    const { id } = res.locals.user;

    const addresses = await models.Address.findAll({
        where: {
            user_id: id 
        },
        raw: true,
        nest: true
    });

    return res.status(200).json(addresses);
}

export default findAllAddresses;
