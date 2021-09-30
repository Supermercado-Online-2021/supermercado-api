
import validateCPF, {
    splitCPF,
    cpfIsInvalid,
    validateCPFLength,
    validateFirstVerificationDigit,
    validateSecondVerificationDigit
} from '../middlewares/userValidation/validateCPF'



const cpfs = [
    '52998224725',
    '77689062768',
    '00045024936',
    '01182101062',
    '21316016897',
    '26616776824',
    '72002557853',
    '90678117934',
    '82272182100',
    '82272387187',
    '82271577187'
];

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



describe('CPF Validation', () => {
    cpfs.forEach(cpf => {
        const arrayCPF = splitCPF(cpf);

        describe(`Validation CPF ${cpf}`, () => {
            test('If the cpf isnt repeated', () => {
                expect(cpfIsInvalid(cpf).pass).toBeTruthy();
            });

            test('If the cpf length is 11', () => {
                expect(validateCPFLength(cpf).pass).toBeTruthy();
            });

            test('If the first verification digit is validate', () => {
                expect(validateFirstVerificationDigit(arrayCPF).pass).toBeTruthy();
            });

            test('If the second verification digit is validate', () => {
                expect(validateSecondVerificationDigit(arrayCPF).pass).toBeTruthy();
            });

            test('If the CPF is validate', () => {
                expect(validateCPF(cpf).pass).toBeTruthy();
            });
        });
    });
});

describe('CPFs Invalid', () => {
    invalidCPFs.forEach( invalid => {
        test('If all digit of cpf is equals', () => {
            expect(invalid).toBeTruthy();
        });
    });
});
