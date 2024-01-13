/// <reference types="cypress"/>

// Elementos 

const elements = {
    error_message: '#errorMessageFirstName',
    success_message: '#swal2-title',
    fields: {
        nome: '#user',
        email: '#email',
        senha: '#password'
    },
    buttons: {
        register: '#btnRegister'
    },
}

// Commands 

Cypress.Commands.add('checkSuccessMessageInRegister', () => {
    cy.get(elements.success_message)
        .should('have.text', 'Cadastro realizado!')
        .should('be.visible')
})

Cypress.Commands.add('fillNameInRegister', (name) => {
    cy.get(elements.fields.nome)
        .should('be.visible')
        .type(name)
})

Cypress.Commands.add('fillEmailInRegister', (email) => {
    cy.get(elements.fields.email)
        .should('be.visible')
        .type(email)
})

Cypress.Commands.add('fillPasswordInRegister', (password) => {
    cy.get(elements.fields.senha)
        .should('be.visible')
        .type(password)
})

Cypress.Commands.add('clickOnRegister', () => {
    cy.get(elements.buttons.register)
        .should('be.visible')
        .click()
})

Cypress.Commands.add('checkMessageErrorInRegister', (messageText) => {
    let found = false; // Flag para verificar se o texto foi encontra

    cy.get('[id="errorMessageFirstName"]').each((element) => {
        // Usar o Cypress para obter o texto do elemento
        cy.wrap(element).invoke('text').then((text) => {
            if (text.includes(messageText)) {
                found = true; // Define a flag como verdadeira
                cy.wrap(element)
                    .should('have.text', messageText)
                    .should('be.visible');
                return false; // Interrompe a iteração do each
            }
        });
    }).then(() => {
        if (!found) {
            // Lança um erro se o texto não for encontrado em nenhum elemento
            throw new Error(`Nenhum elemento contém o texto '${messageText}'.`);
        }
    });
});



