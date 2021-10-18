
import { NextFunction, Request, Response } from "express";
import axios, { AxiosResponse } from 'axios';

import validationCPF from '../middlewares/userValidation/validateCPF';



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
    const { cpf, cep } = req.body;

    const validateCEP = await validationCEP(cep);
    const validateCPF = validationCPF(cpf);

    if(!validateCEP)
        return res.status(400).json({ message: "CEP inválido "});
    if(!validateCPF.pass)
        return res.status(400).json(validateCPF.message);

    next();
}

export default validateAddressMiddleware;
