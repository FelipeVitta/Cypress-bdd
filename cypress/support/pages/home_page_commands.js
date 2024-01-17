/// <reference types="cypress"/>

import 'cypress-real-events/support';

// Elementos

const elements = {
    buttons: {
        login: '.fa-user',
        register: '.fa-lock',
        shop: '.has-megaitem'
    },
    page_sections: {
        top_header:'#top_header',
        menu_shop_hover: '.mega-menu'
    },
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

Cypress.Commands.add('accessShopPage', () => {
    cy.viewport(1280, 720)
    cy.visit('/')
        .get(elements.page_sections.top_header)

      cy.get(elements.buttons.shop)
        .should('be.visible')
        .trigger('mouseover')

      cy.get(elements.page_sections.menu_shop_hover)
        .contains('Shop Four Grid')
        .click({force: true})
})

