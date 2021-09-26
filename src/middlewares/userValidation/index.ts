
import { Request, Response, NextFunction } from 'express';

import checkAllValidation from '../../util/checkAllValidations';

import validateCPF from './validateCPF';
import validatePassword from './validatePassword';
import validateEmail from './validateEmail';



async function userValidationMiddleware ( req: Request, res: Response, next: NextFunction ) {
    try {
        const { senha, cpf, email } = req.body;

        const validate = checkAllValidation([
            validateCPF(cpf),
            validatePassword(senha),
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
