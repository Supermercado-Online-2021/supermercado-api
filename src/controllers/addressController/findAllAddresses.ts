
import axios from "axios";

import { Request, Response } from "express";
import { Model } from 'sequelize';

import models from '../../models/'

import { ViaCepResult } from "../../middlewares/validateAddressMiddleware";



const mergeData = (data: Model<any,any>) => 
    new Promise( async (resolve) => {
        const url = `https://viacep.com.br/ws/${data.getDataValue('cep')}/json/`
        const address = await axios.get<ViaCepResult>(url);
        
        resolve({
            id: data.getDataValue('id'),
            name: data.getDataValue('name'),
            cpf: data.getDataValue('cpf'),
            cep: data.getDataValue('cep'),
            number: data.getDataValue('number'),
            complement: data.getDataValue('complement'),
            references: data.getDataValue('references'),
            user_id: data.getDataValue('user_id'),

            city: address.data.localidade,
            state: address.data.uf,
            neighborhood: address.data.bairro
        });
    });



async function findAllAddresses( req: Request, res: Response ) {
    const { id } = res.locals.user;

    const addresses = await models.Address.findAll({
        where: {
            user_id: id 
        },
        raw: true,
        nest: true
    });

    // const promises = result.map( address => mergeData(address) );
    // const addresses = await Promise.all(promises);

    return res.status(200).json(addresses);
}

export default findAllAddresses;
