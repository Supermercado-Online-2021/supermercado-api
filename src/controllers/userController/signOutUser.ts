
import { Request, Response } from "express";

import { destroy } from '../../util/authentication';



async function signOutUser( req: Request, res: Response ) {
    try {
        const { token } = req.headers;

        const destroyed = await destroy( String(token) );

        return res.status(200).json({
            auth: false,
            destroyed
        });
    }catch(err) {
        return res.status(500).json(err);
    }
}

export default signOutUser;
