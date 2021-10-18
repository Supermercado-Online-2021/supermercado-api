
import { Request, Response } from "express";

import models from '../../models/';



async function findCard( req: Request, res: Response ) {
    try{
        const {id} = req.params;

        const { attributes, fields } = res.locals;
        const { id: user_id } = res.locals.user;

        const card = await models.Card.findOne({
            where: { id, user_id },
            attributes,
            include: fields.some( (f: string) => f === 'type' ) 
                ? { model: models.CardTypes }
                : undefined
        });

        if(card)
            return res.status(200).json(card);

        return res.status(404).json({
            message: "Card not found"
        });
    }catch(err) {
        return res.status(500).json(err);
    }
}

export default findCard;
