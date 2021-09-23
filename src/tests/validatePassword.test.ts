
import validatePassword, { 
    validatePasswordLength, 
    validatePasswordWithCharacterSpecial,
    validatePasswordWithLowerCase,
    validatePasswordWithUpperCase,
    validatePasswordWithNumbers
} from '../util/validatePassword'



describe( 'Validation Password', () => {
    const password = 'Aaj0$#jR'

    test('If password must contain at least 8 characters', () => {
        expect( validatePasswordLength(password).pass ).toBeTruthy();
    });

    test('If password must contain at least 2 uppercase letters ', () => {
        expect( validatePasswordWithUpperCase(password).pass ).toBeTruthy();
    });

    test('If password must contain at least 1 lowercase letters ', () => {
        expect( validatePasswordWithLowerCase(password).pass ).toBeTruthy();
    });

    test('If password must contain at least 1 number', () => {
        expect( validatePasswordWithNumbers(password).pass ).toBeTruthy();
    });

    test('If password must contain at least 2 characters special', () => {
        expect( validatePasswordWithCharacterSpecial(password).pass ).toBeTruthy();
    });

    test('If password must pass all tests', () => {
        expect( validatePassword(password).pass ).toBeTruthy();
    });
});
