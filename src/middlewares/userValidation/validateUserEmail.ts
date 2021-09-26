
import Validation from "../../types/Validation";
import checkAllValidation from "../../util/checkAllValidations";



export const validateUserLength = (user: string): Validation => {
    const validate = user.length >= 1;

    return {
        pass: validate,
        message: validate
            ? 'Usuário valido.'
            : "Usuário deve ser maior que 1."
    }
}

export const validateUserUnwantedCharacter = (user: string): Validation => {
    const validate = !(user.includes('@') || user.includes(' '));

    return {
        pass: validate,
        message: validate
            ? 'Usuário valido.'
            : 'Usuário não pode conter @ ou espaços.'
    }
}



function validateUserEmail( user: string ): Validation {
    return checkAllValidation([
        validateUserLength(user),
        validateUserUnwantedCharacter(user)
    ], "Usuário de e-amil valido.");
}  

export default validateUserEmail;
