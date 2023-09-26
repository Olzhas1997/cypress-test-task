const elementCount = 3;
const elementArray = [];

describe('Проверка Todo-List', () => {
  context('math', () => {
    it('Перейти на сайт https://forhemer.github.io/React-Todo-List/', () => {
      cy.visit('https://forhemer.github.io/React-Todo-List/');

      for(let i = 0; i < elementCount; i++)
      {
        let elementText = `${i + 1}-й элемент`;
        elementArray.push(elementText);

        cy.get('.input-text').click()
        .type(elementText);
      
        cy.contains('Submit').click();
      }

      cy.get('.inner')
        .find('li')
        .should('have.length', elementCount);
      
      cy.get('.inner')
        .contains(elementArray[0])
        .as('elementChangedContent')
        .parent('li')
        .as('elementChanged')
        .find('input').click();
      
      cy.get('@elementChanged')
        .find('span')
        .invoke('css', 'text-decoration')
        .should('include', 'line-through');

      cy.get('@elementChanged')
        .contains('Delete')
        .click();

      cy.get('@elementChangedContent')
        .should('not.exist');
    });
  })
})