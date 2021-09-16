
import { Request, Response } from 'express'
import models from '../../models/'



async function insertUser( req: Request, res: Response ) {
    try {
        const result = await models.User.create(req.body);

        return res.status(201).json(result);
    } catch(err) {
        return res.status(503).json({
            error: err
        });
    }
}



export default insertUser
