
import { Request, Response } from 'express'
import models from '../../models/'

import validatePassword from '../../util/validatePassword'



async function insertUser( req: Request, res: Response ) {
    try {
        const { email, senha, cpf } = req.body;
        const { nome, sobrenome, telefone, data_nascimento } = req.body;


        const validationPassword = validatePassword(senha);
        if( validationPassword.pass === false )
            return res.status(400).json({
                error: validationPassword.message
            });

        const result = await models.User.create(req.body); 

        return res.status(201).json(result);
    } catch(err) {
        return res.status(503).json({
            error: err
        });
    }
}



export default insertUser
