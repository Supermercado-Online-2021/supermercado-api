import Validation from "@Types/Validation";

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



const validate = (cpf: number[], amount: number) => {
    const verificationDigitIndex = amount-1;

    const sum = cpf.reduce( (acc, value, index ) => {
        return index < verificationDigitIndex
            ? acc + value*(amount-index)         
            : acc
    }, 0 );

    let rest = (sum * 10) % 11;
    rest = rest >= 10 ? 0: rest;

    return rest === cpf[verificationDigitIndex];
}



export const cpfIsInvalid = (cpf: string) =>
    invalidCPFs.some( invalid => invalid === cpf );

export const validateFirstVerificationDigit = (cpf: number[]) =>
    validate( cpf, 10 );

export const validateSecondVerificationDigit = (cpf: number[]) =>
    validate( cpf, 11 );



export default function validateCPF( cpf: string ): Validation {
    const arrayCPF = splitCPF(cpf);

    const invalid = cpfIsInvalid(cpf);
    const first = validateFirstVerificationDigit(arrayCPF);
    const second = validateSecondVerificationDigit(arrayCPF);

    const validate = !invalid && first && second;
    return {
        pass: validate,
        message: validate
            ? 'CPF valido.'
            : 'CPF invalido.'
    }
}
