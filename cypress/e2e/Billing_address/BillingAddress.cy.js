describe('Fill and Submit Form Multiple Times', () => {
  it.only("Should be able to submit a successful submission via contact us form", () => {
  cy.visit('https://student.infinitylearn.com/');
  cy.get('.UNFAPP-phncuntry-drpdwn.ng-pristine .UNFAPP-phncuntry-fldgrp').type('6361415008');
  cy.get('.UNFAPP-txt-link.ng-star-inserted').click();
  cy.get('input[placeholder="Password"]').type('Pass1234');
  cy.get('button[type="button"]').click();
  cy.get(':nth-child(4) > :nth-child(4) > a > span').click();
  cy.wait(2000)
  cy.get('.SUBCRP-blue-btn.full').should('contain.text', 'Buy Now')
  .first().click();
  // cy.wait(2000)
  // cy.get(':nth-child(1) > .SUBCRP-list-box > .SUBCRP-package-detail-row > .SUBCRP-package-detail-btn-row > .SUBCRP-blue-btn').click();
  // cy.get('.payment-btn').click();
  // cy.get('.SUBCRP-cart-edit-icon-btn > img').click();
  
   
  //cy.get('input[placeholder="Last Name"]:first-of-type').clear().type('testing');});
  });
    
  
  for (let i = 0; i < 500; i++) {
      it(`should fill and submit form - iteration ${i + 1}`, () => {
       
       cy.get(':nth-child(1) > :nth-child(2) > .form-group > .form-control').clear()
         .type('Mounika');

       cy.get(':nth-child(1) > :nth-child(3) > .form-group > .form-control').clear()
       .type('testing');

       cy.get(':nth-child(1) > :nth-child(4) > .form-group > .phone-box-with-country-code > .form-control').clear()
       .type('9999999999');

       cy.get(':nth-child(5) > .form-group > .form-control').clear()
       .type('test1234567@gmail.com');
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
  
  