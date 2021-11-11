
import { Request, Response } from "express";

import { sign, destroy } from '../../util/authentication';



async function refreshToken( req: Request, res: Response ) {
    try {
        const { auth, user } = res.locals;

        destroy(String( req.headers.token ));

        const token = await sign({ 
            email: user.email, 
            id: user.id
        });

        return res.status(200).json({
            auth,
            user,
            token
        });
    }catch(err) {
        return res.status(500).json({
            message: "Erro interno no servidor"
        });
    }
}

export default refreshToken;
