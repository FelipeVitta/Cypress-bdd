/// <reference types="cypress"/>

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

import { faker } from '@faker-js/faker';

const user_data = require('../../fixtures/pattern.json')

Given("I am on login screen", () => {
    cy.accessLogin()
})

Given('I fill e-mail', () => {
    cy.fillEmailInLogin(user_data.user_email)
})

Given('I fill my credentials', () => {
    cy.fillEmailInLogin(user_data.user_email)
    cy.fillPasswordInLogin(faker.internet.password())
})

When("I click on login", () => {
    cy.clickLogin()
})

Then("I see the message {string}", (message) => {
    cy.validMessageError(message)
})

Then('I see success message', () => {
    cy.checkSuccessMessageInLogin(user_data.user_email)
})

