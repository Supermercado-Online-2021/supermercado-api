
import {cryptographyPassword} from '../../util/cryptographyPassword';
import { Request, Response } from 'express'
import models from '../../models/'



async function insertUser( req: Request, res: Response ) {
    try {
        const { email, password, cpf } = req.body;
        const { name, last_name, phone, birthday } = req.body;

        const cryptPassword = await cryptographyPassword(password);

        const result = await models.User.create({
            email, cpf,
            password: cryptPassword,
            name, last_name, phone, birthday
        }); 

        return res.status(201).json(result);
    } catch(err) {
        return res.status(503).json({
            error: err
        });
    }
}



export default insertUser
