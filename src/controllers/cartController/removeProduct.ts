
import { Request, Response } from "express";



async function removeProduct( req: Request, res: Response ) {
    try{
        return res.status(200).json({ ok: true });
    }catch(err) {
        return res.status(500).json({
            message: err
        })
    }
}

export default removeProduct;
