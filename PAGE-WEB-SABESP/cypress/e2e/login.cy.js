describe('Acesso a pagina Sabesp de HOMO', () => {
  it('Acessar a pagina da Sabesp de Homologação', () => {
    cy.visit('/')
    cy.get('#fechaPop > .mat-button-wrapper > .mat-icon').click({force:true})
    cy.get('.botao-aceitar').click()
    cy.get('.cpf').type('739.703.398-98')
    cy.get('.senha').type('@Sabesp4Win')
  })
})