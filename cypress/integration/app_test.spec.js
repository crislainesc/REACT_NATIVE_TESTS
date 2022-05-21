/// <reference types="cypress" />

describe('automated tests in react native', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should appear on the screen when the app is opened', () => {
        cy.get('.r-color-jjnixk')
            .contains('Testes automatizados no Reat Native')
            .should('be.visible');
    });

    it('should navigate to login screen when pressing button', () => {
        cy.get('.r-alignItems-1awozwy').click();
    });

    it('should enter email and password and navigate to the home page when pressing the button', () => {
        cy.get('.r-alignItems-1awozwy').click();

        cy.get(':nth-child(1) > .css-textinput-11aywtz').type(
            'useremail@email.com'
        );
        cy.get(':nth-child(2) > .css-textinput-11aywtz').type('userpassword');

        cy.get(
            '[style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-flex-13awgt0 > .r-alignItems-1awozwy'
        ).click();
    });

    it('should appear on the screen when the app is opened', () => {
        cy.get('.r-alignItems-1awozwy').click();

        cy.get(
            '[style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-flex-13awgt0 > .r-alignItems-1awozwy'
        ).click();

        cy.get('.r-height-dc5v9k > .css-text-901oao').should('be.visible');
    });
});
