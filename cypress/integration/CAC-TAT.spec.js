/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(function() {
        cy.visit('./src/index.html');
    })

    it('verifica o título da aplicação', function() {

        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('#firstName').type('Sidnei')
        cy.get('#lastName').type('Junior')
        cy.get('#email').type('email@gmail.com') 
        cy.get('#open-text-area').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum nunc id lacinia consequat. Nam venenatis nulla at sapien laoreet, eu vestibulum augue auctor.', ({
            delay:0
        }))
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })

    it.only('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
        cy.get('#email').type('email123') 
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })


    
  })