Feature: Register User
    Eu como cliente
    Quero me cadastrar na aplicação
    Para fazer um pedido de compra

    # Como o before each (ocorre antes de cada cenário)
    Background: Access register screen
        Given I am on register screen

    Scenario: Campo nome vazio
        When I click on Register
        Then I see message "O campo nome deve ser prenchido" on register
    
    Scenario: Campo e-mail vazio
        And I fill name
        When I click on Register
        Then I see message "O campo e-mail deve ser prenchido corretamente" on register

    Scenario: Campo e-mail inválido
        And I fill name
        And I fill e-mail "invalidEmail"
        When I click on Register
        Then I see message "O campo e-mail deve ser prenchido corretamente" on register

    Scenario: Campo senha inválido
        And I fill name
        And I fill e-mail "felipeteste@gmail.com"
        And I fill password "123"
        When I click on Register
        Then I see message "O campo senha deve ter pelo menos 6 dígitos" on register

    Scenario: Campo senha vazio
        And I fill name
        And I fill e-mail "felipeteste@gmail.com"
        When I click on Register
        Then I see message "O campo senha deve ter pelo menos 6 dígitos" on register

    Scenario: Cadastro de usuário com sucesso
        And I fill my datas of register
        When I click on Register
        Then I see message success message on register