Feature: Adicionar item ao carrinho
    Eu como cliente
    Quero adicionar um item ao carrinho
    Para fazer um pedido de compra

    Scenario: Adicionar um item repetido ao carrinho
        Given I am in shop screen
        When I add a repeated item to cart
        Then I see the message "This product is already added in your Cart" on shop page

    Scenario: Adicionar um item ao carrinho com sucesso
        Given I am in shop screen
        When I add a new item to cart
        Then I see the message "Successfully added to your Cart" on shop page
        And I can see the item in the cart