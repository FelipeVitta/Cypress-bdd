/// <reference types="cypress" />

describe('fazendo teste', () => {


    it.only('narutosasuke', () => {
        cy.accessRegister()
        cy.clickOnRegister()
        cy.checkMessageErrorInRegister('O campo nome deve ser prenchido')
    })

    
})