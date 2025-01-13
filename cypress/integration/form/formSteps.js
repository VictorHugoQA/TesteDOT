import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import MetodosPage from '../../support/pageobjects/metodosPage'
const met = new MetodosPage

Given('que o usuário está na página inicial da loja', () => {
  met.abrirPagina()
})


And('clicar para criar nova conta', () => {
  met.botaoCriarNovaConta()
});

And('preencher campos obrigatorios', () => {
  met.criarNovaConta()
});


When('o usuário seleciona o primeiro produto visível', () => {
  met.selecionarProdutoTelaHome()
});

And('o usuário adiciona o produto ao carrinho', () => {
  met.adcionarAoCarrinho()
});

Then('o produto deve estar presente no carrinho', () => {
  met.validarProdutoNoCarrinho()
});

And('o usuário prossegue para a tela de pagamento', () => {
  met.preencherDadosPagamento()
});

Then('o produto deve ser exibido corretamente na tela de pagamento', () => {
  met.validarTelaResumo()
});


