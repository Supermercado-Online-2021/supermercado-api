
import Validation from "../../types/Validation";
import checkAllValidation from "../../util/checkAllValidations";



export const validateDominianLength = (dominian: string): Validation => {
    const validate = dominian.length >= 3;

    return {
        pass: validate,
        message: validate
            ? 'Dominio valido.'
            : "Dominio deve ser maior que 3."
    }
}

export const validateDominianUnwantedCharacter = (dominian: string): Validation => {
    const validate = !(dominian.includes('@') || dominian.includes(' '));

    return {
        pass: validate,
        message: validate
            ? 'Dominio valido.'
            : 'Dominio não pode conter @ ou espaços.'
    }
}

export const validateDominianPoint = (dominian: string): Validation => {
    const index = dominian.indexOf('.');
    const validate = index > 0 && index < dominian.length-1;

    return {
        pass: validate,
        message: validate 
        ? "Dominio valido."    
        : "O dominio deve conter ao menos um ponto, e ao menos um caracter antes e depois."

    }
}



function validateDominianEmail( dominian: string ): Validation {
    return checkAllValidation([
        validateDominianLength(dominian),
        validateDominianUnwantedCharacter(dominian),
        validateDominianPoint(dominian)
    ], "Dominio de e-amil valido.");
}  

export default validateDominianEmail;
