
import { Request, Response } from 'express';

import models from '../../models';

import cryptographyPassword from '../../util/cryptographyPassword';



async function signInUser( req: Request, res: Response ) {
    try {
        const { email } = req.body;

        const password = await cryptographyPassword( req.body.senha );

        const user = await models.User.findOne({
            where: {
                senha: password, 
                email
            }
        });
        
        if(user) {
            return res.status(200).json({ 
                auth: true,
                user
            });
        }

        return res.status(401).json({
            auth: false,
            message: "E-mail ou senha inválido."
        });
    } catch(err) {
        return res
            .status(500)
            .json(err);
    }
}

export default signInUser;
