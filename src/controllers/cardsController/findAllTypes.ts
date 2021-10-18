
import { Request, Response } from "express";
import models from "../../models";



async function findAllTypes( req: Request, res: Response ) {
    try{
        const cardTypes = await models.CardTypes.findAll();
        
        return res.status(200).json(cardTypes);
    } catch(err) {
        return res.status(500).json(err);
    }
}

export default findAllTypes;
