/// <reference types="cypress"/>

// Elementos

const elements = {
    buttons: {
        login: '#btnLogin'
    },
    fields: {
        email: '#user',
        password: '#password'
    }
}

// Commands 

Cypress.Commands.add('clickLogin', () => {
    cy.get(elements.buttons.login)
        .should('be.visible')
        .click()
})

Cypress.Commands.add('validMessageError', (message) => {
    cy.get('.invalid_input')
        .should('be.visible')
        .should('have.text', message)
})

Cypress.Commands.add('fillEmailInLogin', (email) => {
    cy.get(elements.fields.email)
        .should('be.visible')
        .type(email)
})

Cypress.Commands.add('fillPasswordInLogin', (password) =>{
    cy.get(elements.fields.password)
        .should('be.visible')
        .type(password)
})

Cypress.Commands.add('checkSuccessMessageInLogin', (email) => {
    cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text', 'Login realizado')

    cy.get('#swal2-html-container')
        .should('be.visible')
        .should('have.text',`Olá, ${email}`)
})