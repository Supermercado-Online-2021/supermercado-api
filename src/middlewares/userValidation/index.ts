
import { Request, Response, NextFunction } from 'express';
import { Op } from 'sequelize';

import checkAllValidation from '../../util/checkAllValidations';

import validateCPF from './validateCPF';
import validatePassword from './validatePassword';
import validateEmail from './validateEmail';

import User from '../../types/User';

import models from '../../models/';



async function userValidationMiddleware ( req: Request, res: Response, next: NextFunction ) {
    try {
        const { password, cpf, email, phone } = req.body;

        const validate = checkAllValidation([
            validateCPF(cpf),
            validatePassword(password),
            validateEmail(email)
        ], '');

        if(validate.pass === false)
            return res.status(400).json(validate);
        else {
            const registerUser = await models.User.findOne({
                where: {
                    [Op.or]: {
                        cpf, email, phone
                    }
                }
            });

            if(registerUser) {
                return res.status(409).json({
                    error: "User alreldy exists",
                    field: 'email',
                    message: registerUser.getDataValue('email') === email
                        ? "Email já cadastrado"
                        : registerUser.getDataValue('cpf') 
                            ? "Telefone já cadastrado"
                            : "CPF já cadastrado"
                });
            }
        }

        next(); 
    } catch(err) {
        return res.status(500).json({
            ok: false,
            message: "Algo deu errado."
        })
    }
}

export default userValidationMiddleware;
