
import { Request, Response, NextFunction } from 'express';
import { Op } from 'sequelize';

import checkAllValidation from '../../util/checkAllValidations';

import validateCPF from './validateCPF';
import validatePassword from './validatePassword';
import validateEmail from './validateEmail';

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

        next(); 
    } catch(err) {
        return res.status(500).json({
            ok: false,
            message: "Algo deu errado."
        })
    }
}

export default userValidationMiddleware;
