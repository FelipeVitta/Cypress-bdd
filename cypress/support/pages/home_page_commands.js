/// <reference types="cypress"/>

// Elementos

const elements = {
    buttons: {
        login: '.fa-user',
        register: '.fa-lock'
    },
    page_sections: {
        top_header:'#top_header'
    }
}

// Ações

Cypress.Commands.add('accessLogin', () => {
    cy.visit('/')
        .get(elements.page_sections.top_header)

    cy.get(elements.buttons.login)
        .should('be.visible')
        .click()
})

Cypress.Commands.add('accessRegister', () => {
    cy.visit('/')
        .get(elements.page_sections.top_header)

    cy.get(elements.buttons.register)
        .should('be.visible')
        .click()
})

