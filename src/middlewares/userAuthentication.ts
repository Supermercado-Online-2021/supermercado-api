
import { Request, Response, NextFunction } from 'express';

import { verify } from '../util/authentication';
import models from './../models';



interface UserToken {
    id: number,
    email: string
}



async function userAuthMiddleware( req: Request, res: Response, next: NextFunction ) {
    try {
        const { token } = req.headers;
        
        const { id } = await verify<UserToken>( String(token) );
        const user = await models.User.findByPk(id);

        res.locals = {
            ...res.locals,
            auth: true,
            user
        };

        return next();
    } catch(err) {
        return res.status(401).json({
            auth: false, 
            err
        });
    } 
}

export async function opcionalAuthUserMiddleware( req: Request, res: Response, next: NextFunction ) {
    try {
        const { token } = req.headers;
    
        if(token) {
            const { id } = await verify<UserToken>( String(token) );
            const user = await models.User.findByPk(id);

            res.locals = {
                ...res.locals,
                auth: true,
                user
            };

        } else {
            res.locals = {
                auth: false
            }
        }

        return next();
    } catch(err) {
        res.locals = {
            ...res.locals,
            auth: false,
        };
    } 

    return next();
}

export default userAuthMiddleware;
