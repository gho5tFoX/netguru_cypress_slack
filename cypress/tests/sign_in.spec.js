import signInPage from '../pages/signInPage'


describe('Sign in form', function() {

    beforeEach( function() {
        cy.visit("signin#/signin")

        cy.fixture("testData").then(data => {
            this.data = data
        })
    })
    it('Sign in without email', function() {
        signInPage.verifyPage()
        signInPage.clickSignIn()
        signInPage.validateEmailErrorMessage(this.data.noEmailErrorMessage)
    });
})
