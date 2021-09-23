
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = lowerCase.toUpperCase();
const numbers = '0123456789';
const characterSpecial = '[]{}()_-#%$';



interface Validation {
    pass: boolean,
    message: string
}



const validate = ( password: string, min: number, allowed: string, message: string ): Validation => {
    const passwordSplit = password.split('');
    let count = 0;

    passwordSplit.forEach( value => {
        const include = allowed.includes(value.toString());
        if( include )
            count++;
    });

    return {
        pass: count >= min,
        message
    };
}



export const validatePasswordLength = (password: string): Validation => ({
    pass: password.length >= 8,
    message: 'Senha deve conter ao menos 8 caracteres.'
})

export const validatePasswordWithLowerCase = (password: string) =>
    validate( password, 1, lowerCase, 'Senha deve conter ao menos 1 letra minuscula.' ); 

export const validatePasswordWithUpperCase = (password: string) =>
    validate( password, 2, upperCase, 'Senha deve conter ao menos 2 letras maisculas.'  );

export const validatePasswordWithNumbers = (password: string) =>
    validate( password, 1, numbers, 'Senha deve conter ao menos 1 número.' );

export const validatePasswordWithCharacterSpecial= (password: string) =>
    validate( password, 1, characterSpecial, `Senha deve conter ao menos 2 caracteres especiais: ${characterSpecial}` );



export default function validatePassword(password: string): Validation {
    const validations: Validation[] = [
        validatePasswordLength(password),
        validatePasswordWithLowerCase(password),
        validatePasswordWithUpperCase(password),
        validatePasswordWithNumbers(password),
        validatePasswordWithCharacterSpecial(password)
    ];

    return validations.find( validate => validate.pass === false ) || {
        pass: true,
        message: "Senha válida."
    };
}
