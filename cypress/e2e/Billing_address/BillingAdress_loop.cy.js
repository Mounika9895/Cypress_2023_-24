describe('Fill and Submit Form', () => {
    it('should fill the form and submit', () => {
      // Visit the webpage containing the form
      cy.visit('your_form_url');
  
      // Fill in the first name
      cy.get('#firstName').type('John');
  
      // Fill in the last name
      cy.get('#lastName').type('Doe');
  
      // Fill in the email ID
      cy.get('#emailId').type('john.doe@example.com');
  
      // Fill in the pin code
      cy.get('#pinCode').type('123456');
  
      // Submit the form
      cy.get('form').submit();
  
      // You can add assertions or further actions after form submission if needed
      // For example, checking if a success message is displayed
      cy.get('.success-message').should('be.visible');
    });
  });
  