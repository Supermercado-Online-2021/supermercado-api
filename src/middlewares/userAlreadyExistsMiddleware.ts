
import { Request, Response, NextFunction } from 'express';
import { Op } from 'sequelize';

import models from '../models';



async function userAlreadyExists ( req: Request, res: Response, next: NextFunction ) {
    try {
        const { cpf, email, phone } = req.body;

        const registerUser = await models.User.findOne({
            where: {
                [Op.or]: {
                    cpf, email, phone
                }
            }
        });

        if(registerUser) {
            return res.status(409).json({
                error: "User already exists",
                field: 'email',
                message: registerUser.getDataValue('email') === email
                    ? "Email já cadastrado"
                    : registerUser.getDataValue('cpf') === cpf
                        ? "CPF já cadastrado"
                        :  registerUser.getDataValue('phone') === phone 
                            ? "Telefone já cadastrado"
                            : "Usuário já cadastrado"
            });
        }

        next(); 
    } catch(err) {
        return res.status(500).json({
            ok: false,
            message: "Algo deu errado."
        });
    }
}

export default userAlreadyExists;
