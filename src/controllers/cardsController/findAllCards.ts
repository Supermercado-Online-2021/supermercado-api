
import { Request, Response } from "express";

import models from '../../models/';



async function findAllCards( req: Request, res: Response ) {
    try{
        const {id} = req.params;

        const { attributes } = res.locals;
        const { id: user_id } = res.locals.user;

        const card = await models.Card.findAll({
            where: { id, user_id },
            attributes,
            include: {
                model: models.CardTypes
            }
        });

        if(card)
            return res.status(200).json(card);

        return res.status(404).json({
            message: "Cards not found"
        });
    }catch(err) {
        return res.status(500).json(err);
    }
}

export default findAllCards;
