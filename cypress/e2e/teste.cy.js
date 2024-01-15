/// <reference types="cypress" />

describe('Teste', () => {


    it.only('Test', () => {
        cy.accessRegister()
        cy.clickOnRegister()
        cy.checkMessageErrorInRegister('O campo nome deve ser prenchido')
    })

    
})