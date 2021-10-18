
import { Request, Response } from "express";



async function addCard( req: Request, res: Response ) {
    return res.status(200).json({ ok: true })
}

export default addCard;
