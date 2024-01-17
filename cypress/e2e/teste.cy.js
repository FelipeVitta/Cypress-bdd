/// <reference types="cypress" />

describe('Teste', () => {

    it.only('Test', () => {
        cy.viewport('macbook-15')
        cy.accessShopPage()
        cy.addRepeatedItemToCart()
        cy.checkRepeatedItemMessage()
    })

    
})