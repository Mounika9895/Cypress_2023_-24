import LoginPage from "../../integration/pageObjects/Loginpage";

describe('Login Test', () => {
  let loginPage;

  beforeEach(() => {
    loginPage = new LoginPage();
    cy.visit('https://studentcartflowstage.devinfinitylearn.in/');
  });

  it('should log in with a specific phone number', () => {
    const phoneNumber = '6361415008'; // Replace with your desired phone number
    const password = 'Pass123';
   
    loginPage.fillPhonenumber(phoneNumber);
    loginPage.clickLoginwithpasswordbutton();
    loginPage.fillpassword(password);

    loginPage.clickLoginButton();
    

    // Add assertions or further test logic
  });
});
