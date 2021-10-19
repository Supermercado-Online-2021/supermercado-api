
import { Request, Response } from "express";



async function updateProductAmount( req: Request, res: Response ) {
    try{
        return res.status(200).json({ ok: true });
    }catch(err) {
        return res.status(500).json({
            message: err
        });
    }
}

export default updateProductAmount;
