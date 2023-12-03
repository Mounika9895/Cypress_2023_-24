describe('Fill and Submit Form Multiple Times', () => {
  it.only("Should be able to submit a successful submission via contact us form", () => {
  cy.visit('https://student.infinitylearn.com/');
  cy.get('.UNFAPP-phncuntry-drpdwn.ng-pristine .UNFAPP-phncuntry-fldgrp').type('6361415008');
  cy.get('.UNFAPP-txt-link.ng-star-inserted').click();
  cy.get('input[placeholder="Password"]').type('Pass1234');
  cy.get('button[type="button"]').click();
  cy.get(':nth-child(4) > :nth-child(4) > a > span').click();
  cy.get('.SUBCRP-list .ng-star-inserted:nth-of-type(1) .SUBCRP-innr-area .SUBCRP-blue-btn').click();
  cy.get(':nth-child(1) > .SUBCRP-list-box > .SUBCRP-package-detail-row > .SUBCRP-package-detail-btn-row > .SUBCRP-blue-btn').click();
  cy.get('.payment-btn').click();
  cy.get('.SUBCRP-cart-edit-icon-btn > img').click();
  
  for (let i = 0; i < 500; i++) {
  cy.get('input[placeholder="First Name"]:first-of-type').type('Mounika');
  cy.get('input[placeholder="Last Name"]:first-of-type').type('test');

  cy.get('')
  }
  });

    
  
  
  
  
  
  
  
  
  
  
  
  for (let i = 0; i < 500; i++) {
      it(`should fill and submit form - iteration ${i + 1}`, () => {
       
      
        // // Fill in the first name
        // cy.get('#firstName').type('John');
  
        // // Fill in the last name
        // cy.get('#lastName').type('Doe');
  
        // // Fill in the email ID
        // cy.get('#emailId').type(`john.doe${i + 1}@example.com`); // Using a unique email for each iteration
  
        // // Fill in the pin code
        // cy.get('#pinCode').type('123456');
  
        // // Submit the form
        // cy.get('form').submit();
  
        // // You can add assertions or further actions after form submission if needed
        // // For example, checking if a success message is displayed
        // cy.get('.success-message').should('be.visible');
      });
    }
  });
  
  