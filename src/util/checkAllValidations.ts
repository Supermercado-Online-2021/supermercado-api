
import Validation from "../types/Validation"



function checkAllValidation( validations: Validation[], truthyMessage: string ): Validation {
    return validations.find( validate => validate.pass === false ) || {
        pass: true, 
        message: truthyMessage
    }
}

export default checkAllValidation;
