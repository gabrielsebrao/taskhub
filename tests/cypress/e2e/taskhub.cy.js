describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('Sign In').click()
    cy.url().should('include', '/signin')
    cy.get('#email').type('jinx')
    cy.get('#password').type('jinx123')
    cy.get('[data-cy=botao-login]').click()
    cy.contains('Projects').click()
    cy.url().should('include', '/projects')
    cy.get('[data-cy="botao-criar-projeto"]').click()
    cy.get('[data-cy="input-projeto-nome"]').type('eu te amooo vi')
    cy.get('[data-cy="input-projeto-descricao"]').type('eu amo muito a vi voces nao tem ideia')
    cy.get('[data-cy="select-projeto-dono"]').select('jayvik é real')
    cy.get('[data-cy="select-projeto-gerentes"]').type('jayvik é real{enter}')
    cy.get('[data-cy="select-projeto-membros"]').type('jayvik é real{enter}jinx{enter}')
    cy.get('[data-cy="botao-form-criar-projeto"]').click() 
  })
})