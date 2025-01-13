/// <reference types="Cypress" />

import elementos from '../elements/elementos';
import { faker } from '@faker-js/faker';
const el = new elementos
const url = Cypress.config("baseUrl")
let productName;
let totalValue;

class MetodosPage {
    abrirPagina() {
        cy.visit(url)
        cy.document().its('readyState').should('eq', 'complete');
    }

    botaoCriarNovaConta(){
        cy.get(el.btnLogin()).should('be.visible').click();
        cy.get(el.btnCriarNovaConta()).click();
    }
    


    criarNovaConta() {
        let randomUsername = faker.internet.userName();
        if (randomUsername.length > 15) {
            randomUsername = randomUsername.slice(0, 15);
        }
        const randomEmail = faker.internet.email();    
        cy.get(el.campoDeUserName()).type(randomUsername);
        cy.get(el.campoDeEmail()).type(randomEmail);
        cy.get(el.campoDeSenha()).type('Fc230978@')
        cy.get(el.campoConfirmaSenha()).type('Fc230978@')
        cy.get(el.checkBox()).click()
        cy.get(el.btnCriarConta()).click()
        cy.wait(2000)
    
    }


    clicarParaCriarConta(){
        cy.get(el.btnCriarConta()).click();
    }
    
    selecionarProdutoTelaHome(){
        cy.get(el.produtoTelaHome()).should('be.visible').click()
        cy.get(el.scrooll()).scrollIntoView();
        cy.get(el.elementoLaptop()).should('be.visible').click()
        cy.get(el.nameProduct()).invoke('text').then((text) => {
            productName = text.trim();
        });
    }

    adcionarAoCarrinho() {          
        cy.get(el.btnAddToCart()).click()
        cy.get(el.btnCheckoutPopUp()).click()
    }

    validarProdutoNoCarrinho(){
        cy.get(el.nomeProduto()).invoke('text').then((cartProductName) => {
            const cartProduct = cartProductName.split('TOP RESULTS FOR:')[0].trim();
            expect(cartProduct).to.equal(productName);
        });
       
    }  
    
    preencherDadosPagamento(){
        cy.get(el.btnNext()).click()
        cy.get(el.btnCheckBoxCard()).click()
        cy.wait(2000)
        cy.get(el.campoNumeroCartao()).type('373333346441')
        cy.wait(2000)
        cy.get(el.campoCvv()).type('3455')
        cy.wait(2000)
        cy.get(el.campoNomeCartao()).type('testes novo')
    }

    validarTelaResumo(){
        cy.get(el.textoValorTotal()).invoke('text').then((text) => {
            totalValue = text.trim();
        });
        cy.get(el.btnPagar()).click()
        cy.get(el.scrooll()).scrollIntoView();
        cy.get(el.textoValorTotalResumo()).invoke('text').then((pageTotalValue) => {
            const cartTotal = pageTotalValue.trim();
            expect(cartTotal).to.equal(totalValue);
        });
    }
}

export default MetodosPage;