
import { Request, Response } from 'express';

import models from '../../models';



async function userUpdate( req: Request, res: Response ){
    try {
        const { email } = req.body;

        const user = await models.User.findOne({
            where: { email }
        });

        if(user) 
            user.update({
                ...req.body
            });

        res.status(200).json(user);
    }catch(err) {
        return res.status(500).json({
            message: 'Erro interno no servidor.'
        });
    }
}

export default userUpdate;
