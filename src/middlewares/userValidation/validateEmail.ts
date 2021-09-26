
import Validation from "../../types/Validation";
import checkAllValidation from "../../util/checkAllValidations";

import validateUserEmail from "./validateUserEmail";
import validateDominianEmail from "./validateDominianEmail";



export const validateAtSignEmail = (email: string) => {
    const validate = email.includes('@');
    
    return {
        pass: validate,
        message: validate
            ? "E-mail valido"
            : "E-mail deve conter o @."
    }
}

function validateEmail( email: string ): Validation {
    const [ user, dominian ] = email.split('@');

    return checkAllValidation([
        validateAtSignEmail(email),
        validateUserEmail(user),
        validateDominianEmail(dominian)
    ], "E-mail valido");
}

export default validateEmail;
