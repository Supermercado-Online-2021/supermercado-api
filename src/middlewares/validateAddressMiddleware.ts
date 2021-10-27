
import { NextFunction, Request, Response } from "express";
import axios, { AxiosResponse } from 'axios';
import { Op } from 'sequelize';

import models from '../models/';
import validationCPF from '../middlewares/userValidation/validateCPF';
import Validation from "src/types/Validation";



export interface ViaCepResult {
    logradouro: string,
    bairro: string,
    localidade: string,
    uf: string,
    erro?: boolean
}

async function validationCEP (cep: string): Promise<boolean> {
    try{
        const url = `https://viacep.com.br/ws/${cep}/json/`
        const address = await axios
            .get<any, AxiosResponse<ViaCepResult>>(url);

        return address.data.erro ? false: true;
    }catch(err) {
        return false;
    }
}


async function validateAddressMiddleware( req: Request, res: Response, next: NextFunction ) {
    try{
        const { cpf, cep, number } = req.body;
        const { id: user_id } = res.locals.user;

        const validateCEP = cep !== undefined || req.method === 'POST'
        ? await validationCEP(cep)
        : true;

        const validateCPF = cpf !== undefined || req.method === 'POST'
            ? await validationCPF(cpf)
            : { pass: true, message: '' };

        const where: any = {
            user_id,
            [Op.or]: { 
                cpf,
                [Op.and]: { cep, number }  
            }
        };
        
        if(req.method === 'PUT') {
            const { id } = req.params;
            where['id'] = { [Op.notIn]: [id] }
        }

       if(!validateCEP)
            return res.status(400).json({ message: "CEP inválido "});
        if(validateCPF.pass === false)
            return res.status(400).json({ message: validateCPF.message });
        else {
            const addressExists = await models.Address.findOne({
                where: { [Op.and]: where }
            });

            if(addressExists) {
                const message = addressExists.getDataValue('cpf') === cpf
                    ? "CPF cadastrado em outro destinatário."
                    : "Endereço já cadastrado";

                return res.status(409).json({
                    message
                });
            }
        }

        next();
    }catch(err) {
        return res.status(500).json({
            message: "Erro no servidor, tente novamente mais tarde."
        });
    }
}

export default validateAddressMiddleware;
