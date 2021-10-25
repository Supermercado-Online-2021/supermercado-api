
import { Request, Response } from "express";

import models from '../../models/';

import mergeData from '../../util/mergeAddressWithViaCEP';



async function findAllAddresses( req: Request, res: Response ) {
    try {
        const { id } = res.locals.user;

        const addresses = await models.Address.findAll({
            where: {
                user_id: id 
            }
        });

        if(addresses) {
            const promises = addresses.map( address => mergeData(address) );
            const result = await Promise.all(promises);

            return res.status(200).json(result);
        }

        return res.status(404).json({ message: 'Addresses not found' });
    }catch(err) {
        return res.status(500).json({
            message: "Erro interno"
        });
    }
}

export default findAllAddresses;
