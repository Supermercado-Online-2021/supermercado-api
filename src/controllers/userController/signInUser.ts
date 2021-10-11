
import { sign } from '../../util/authentication';
import { Request, Response } from 'express';

import models from '../../models';

import { comparePassword } from '../../util/cryptographyPassword';



async function signInUser( req: Request, res: Response ) {
    try {
        const { password, email } = req.body;

        const user = await models.User.findOne({
            where: { email },
            attributes: [ 'id','email','password' ]
        });
        
        if( user ) {
            const validate = await comparePassword( password, user.getDataValue('password') )
            if(validate) {
                const token = await sign({ email, id: user.getDataValue('id') });

                return res.status(200).json({ 
                    auth: true,
                    token,
                    user: {
                        id: user.getDataValue('id'),
                        email: user.getDataValue('email')
                    }
                });
            }
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
