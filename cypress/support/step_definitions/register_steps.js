/// <reference types="cypress"/>

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

const user_data = require('../../fixtures/pattern.json')

import { faker } from '@faker-js/faker';

Given("I am on register screen", () => {
    cy.accessRegister()
})

Given("I fill name", () => {
    cy.fillNameInRegister(faker.person.firstName())
})

Given("I fill e-mail {string}", (message) => {
    cy.fillEmailInRegister(message)
})

Given('I fill password {string}', (message) => {
    cy.fillPasswordInRegister(message)
})

Given('I fill my datas of register', () => {
    cy.fillNameInRegister(faker.person.firstName())
    cy.fillEmailInRegister(faker.internet.email())
    cy.fillPasswordInRegister(faker.internet.password())
})

When('I click on Register', () => {
    cy.clickOnRegister()
})

Then('I see message {string} on register', (message) => {
    cy.checkMessageErrorInRegister(message)
})

Then('I see message success message on register', () => {
    cy.checkSuccessMessageInRegister()
})