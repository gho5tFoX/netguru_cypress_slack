import createAccountPage from '../pages/createAccountPage'


describe('Create account form', function() {

    beforeEach( function() {
        cy.visit("get-started#/createnew")

        cy.fixture("testData").then(data => {
            this.data = data
        })
    })
    it('Create account with invalid email', function() {
        createAccountPage.verifyPage()
        createAccountPage.typeEmail(this.data.invalidEmail)
        createAccountPage.clickContinue()
        createAccountPage.validateEmailErrorMessage(this.data.invalidEmailErrorMessage)
    });
})

