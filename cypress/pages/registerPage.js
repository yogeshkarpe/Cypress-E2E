// https://naveenautomationlabs.com/opencart/index.php?route=account/register

class registerPage{

weblocators = {
    firstName: '#input-firstname',
    lastName: "input-lastname",
    email: '#input-email',
    continue:'.btn.btn-primary'
}

openURL(){
    cy.visit(Cypress.env('URL'));   
}

enterFirstName(FName){
    cy.get(this.weblocators.firstName).type('FName');
}

enterLastName(LName){
    cy.get(this.weblocators.lastName).type('LName');
}

enterEmail(Email){
    cy.get(this.weblocators.email).type('Email');
}

clickOnContinue(){
    cy.get(this.weblocators.continue).click();

}

}