
import validateEmail, { validateAtSignEmail } from "../middlewares/userValidation/validateEmail";

import validateUserEmail, { 
    validateUserUnwantedCharacter, 
    validateUserLength 
} from '../middlewares/userValidation/validateUserEmail';

import validateDominianEmail, {
    validateDominianLength,
    validateDominianUnwantedCharacter,
    validateDominianPoint
} from '../middlewares/userValidation/validateDominianEmail';



const emails = [ 'silas@gmail.com' ]

emails.forEach( email => {
    const [ user, dominian ] = email.split('@');

    describe( 'E-mail Validation', () => {
        test('If e-mail contains @', () => {
            expect( validateAtSignEmail(email).pass ).toBeTruthy();
        });
    
        test('If e-mail is validated', () => {
            expect( validateEmail(email).pass ).toBeTruthy();
        });

        describe( "User's E-mail Validation", () => {
            test("If the user's email is validate", () => {
                expect( validateUserEmail(user).pass ).toBeTruthy();
            });
    
            test("If the user's email has contains space or @", () => {
                expect( validateUserUnwantedCharacter(user).pass ).toBeTruthy();
            });
    
            test("If the user's email is the correct length", () => {
                expect( validateUserLength(user).pass ).toBeTruthy();
            });
        });
    
        describe( "Dominian's E-mail Validation", () => {
            test("If the email dominian is validate", () => {
                expect( validateDominianEmail(dominian).pass ).toBeTruthy();
            });
    
            test("If the email dominian is the correct length", () => {
                expect( validateDominianLength(dominian).pass ).toBeTruthy();
            });
    
            test("If the email dominian has contains space or @", () => {
                expect( validateDominianUnwantedCharacter(dominian).pass ).toBeTruthy();
            });
    
            test("If the email dominion contains at least a point and at least character before and after", () => {
                expect( validateDominianPoint(dominian).pass ).toBeTruthy();
            });
        });
    });

});
