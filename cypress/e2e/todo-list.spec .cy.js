const elementCount = 3;
const elementChanged = 0;

describe('Проверка Todo-List', () => {
  context('math', () => {
    it('Перейти на сайт https://forhemer.github.io/React-Todo-List/', () => {
      cy.visit('https://forhemer.github.io/React-Todo-List/');

      for(let i = 1; i <= elementCount; i++)
      {
        cy.get('.input-text').click()
        .type(`${i}-й элемент`);
      
        cy.contains('Submit').click();
      }
      
      cy.get('.inner')
        .find('li')
        .should('have.length', elementCount);
      
      cy.get('.inner')
        .find('li')
        .eq(elementChanged)
        .as('elementChanged')
      
      cy.get('@elementChanged').click()
    })

    // it('sdfsdf', () => {
      
    // })
  })
})