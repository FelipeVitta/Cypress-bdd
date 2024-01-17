/// <reference types="cypress"/>

import 'cypress-mochawesome-reporter/cucumberSupport';

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

const user_data = require('../../fixtures/pattern.json')

Given('I am in shop screen', () =>{
    cy.accessShopPage()
})

When('I add a new item to cart', () =>{
    cy.addItemToCart(9)
})

When('I add a repeated item to cart', () => {
    cy.addItemToCart(6)
})

Then('I see the message {string} on shop page', (message) => {
    cy.checkMessageInModal(message)
})

Then('I can see the item in the cart', () => {
    cy.checkItemInCart()
})


