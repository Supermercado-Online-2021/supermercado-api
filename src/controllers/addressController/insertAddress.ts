
import { Request, Response } from "express";

import { Op } from 'sequelize';

import models from '../../models';



async function insertAddress( req: Request, res: Response ) {
    const { name, cpf, cep, number, complement, references } = req.body; 
    const { id } = res.locals.user;

    const address = await models.Address.create({
        user_id: id,
        name, cpf,
        cep, number, complement, references, 
    });

    return res.status(201).json(address);
}

export default insertAddress;
