
import { Request, Response } from "express";

import models from '../../models';



async function removeCard( req: Request, res: Response ) {
    try{
        const {id} = req.params;
        const { id: user_id } = res.locals.user;

        const card = await models.Card.findOne({
            where: { id, user_id }
        });

        if(card) {
            const destroy = await card.destroy();
            res.status(200).json(destroy);
        }

        return res.status(404).json({
            message: "Card not found"
        });
    }catch(err) {
        return res.status(500).json(err);
    }
}



export default removeCard;
