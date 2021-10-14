
import Validation from "../../types/Validation";
import checkAllValidation from "../../util/checkAllValidations";



const invalidCPFs  = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
]



export const splitCPF = ( cpf: string ) => cpf
    .split('')
    .map( digit => Number(digit) );



const validate = (cpf: number[], amount: number, message: string ): Validation => {
    const verificationDigitIndex = amount-1;

    const sum = cpf.reduce( (acc, value, index ) => {
        return index < verificationDigitIndex
            ? acc + value*(amount-index)         
            : acc
    }, 0 );

    let rest = (sum * 10) % 11;
    rest = rest >= 10 ? 0: rest;

    return {
        pass: rest === cpf[verificationDigitIndex],
        message
    }
}



export const cpfIsInvalid = (cpf: string): Validation => {
    const validate = !invalidCPFs.some( invalid => invalid === cpf );
    
    return {
        pass: validate,
        message: validate
            ? "CPF valido"
            : "CPF inválido"
    }
}

export const validateCPFLength = (cpf: string): Validation => {
    const validate = cpf.length === 11

    return {
        pass: validate,
        message: validate
            ? "Tamanho do cpf válido"
            : "CPF com tamanho inválido, informe todos os 11 digitos do ceu CPF"
    }
}

export const validateFirstVerificationDigit = (cpf: number[]) =>
    validate( cpf, 10, 'CPF inválido, verifique se todos os digitos correspondem ao seu cpf' );

export const validateSecondVerificationDigit = (cpf: number[]) =>
    validate( cpf, 11, 'CPF inválido, verifique se todos os digitos correspondem ao seu cpf' );



export default function validateCPF( cpf: string ): Validation {
    const arrayCPF = splitCPF(cpf);

    return checkAllValidation([
        cpfIsInvalid(cpf),
        validateCPFLength(cpf),
        validateFirstVerificationDigit(arrayCPF),
        validateSecondVerificationDigit(arrayCPF)
    ], 'CPF válido')
}
