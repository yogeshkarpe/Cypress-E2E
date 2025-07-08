import { registerPage } from '../../pages/registerPage';

const registerObj = new registerPage();

describe('test automation', () => {
  it('register page', () => {
    cy.fixture('registerData').then((registerData) => {
      registerObj.openURL();
      registerObj.enterFirstName(registerData.firstName);
      registerObj.enterLastName(registerData.lastName);
      registerObj.enterEmail(registerData.email);
    //   registerObj.enterTelephone(registerData.telephone);
    //   registerObj.enterPassword(registerData.password);
      registerObj.clickOnContinue();
    });
  });
});
