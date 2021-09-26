
import { Request, Response } from 'express'
import models from '../../models/'



async function insertUser( req: Request, res: Response ) {
    try {
        const { email, senha, cpf } = req.body;
        const { nome, sobrenome, telefone, data_nascimento } = req.body;

        const result = await models.User.create({
            email, senha, cpf,
            nome, sobrenome, telefone, data_nascimento
        }); 

        return res.status(201).json(result);
    } catch(err) {
        return res.status(503).json({
            error: err
        });
    }
}



export default insertUser
