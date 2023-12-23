/// <reference types="cypress"/>

// Elementos

const elements = {
    buttons: {
        login: '.fa-user'
    }
}

// Ações

Cypress.Commands.add('accessLogin', () => {
    cy.visit('/')
        .get('#top_header')

    cy.get(elements.buttons.login)
        .should('be.visible')
        .click()
})

