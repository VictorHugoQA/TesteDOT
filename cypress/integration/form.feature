# language: pt

Funcionalidade: Login, selecionar produto, adicionar ao carrinho e validar na tela de pagamento

  Cenario: Fazer login, adicionar um produto ao carrinho e validar na tela de pagamento
    Dado que o usuário está na página inicial da loja
    E clicar para criar nova conta
    E preencher campos obrigatorios
    Quando o usuário seleciona o primeiro produto visível
    E o usuário adiciona o produto ao carrinho
    Então o produto deve estar presente no carrinho
    E o usuário prossegue para a tela de pagamento
    E o produto deve ser exibido corretamente na tela de pagamento
