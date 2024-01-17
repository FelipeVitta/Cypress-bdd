/// <reference types="cypress"/>

import 'cypress-real-events/support';


// Elementos

const elements = {
    itens_shop: '.col-md-4',
    hover_buttons: {
        shop: '.has-megaitem',
    },
    sections: {
        header: '.header-section',
        shopping_cart: '#offcanvas-add-cart'
    }
}

// Commands

Cypress.Commands.add('checkItemInCart', function() {
    let productText = '';

    cy.get(elements.itens_shop)
        .eq(this.actualItemAdd)
        .find('.title')
        .find('a')
        .invoke('text')
        .then((text) => {
            productText = text.trim();

            cy.get(elements.sections.header)
                .find('.fa-shopping-bag')
                .click()

            cy.get(elements.sections.shopping_cart)
                .should('be.visible')
                .find('.offcanvas-wishlist-item-single')
                .contains(productText)
        });
});

Cypress.Commands.add('addItemToCart', function(item) {
    cy.get(elements.itens_shop).eq(item)
        .realHover()

    cy.get(elements.itens_shop).eq(item)
        .contains('Add to cart')
        .should('be.visible')
        .click()
        .then(() => {
            this.actualItemAdd = item; // Armazena o índice no objeto World do Cucumber (escopo de cenário)
        });
});

Cypress.Commands.add('checkMessageInModal', (message) => {
    cy.get('.swal2-html-container')
        .contains(message)
        .should('be.visible')
});

