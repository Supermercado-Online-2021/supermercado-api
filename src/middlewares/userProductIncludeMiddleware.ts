
import { Request, Response, NextFunction } from "express";

import models from '../models'



async function userProductIncludeMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const { auth, user, fields } = res.locals;

        const include = [];
        
        if (auth) {
            if( fields && fields.some( (f: string) => f === 'category' ) )
                include.push({ model: models.Category })

            if(user) {
                include.push({ 
                    model: models.Favorite, 
                    where: { user_id: user.id },
                    attributes: [ 'id' ],
                    required: false
                });
                include.push({
                    model: models.Cart,
                    where: { user_id: user.id },
                    attributes: ['id'],
                    required: false
                });
            }
        }

        res.locals = {
            ...res.locals,
            include
        }

        next();
    }catch(err) {
        return res.status(500).json({
            message: err
        })
    }
}

export default userProductIncludeMiddleware;
