class signInPage {

    locators = {
        email: () => cy.get('[data-qa="email_field"]'),
        signInButton: () => cy.get('[data-qa="submit_button"]'),

        errorMessages: {
            emailErrorMessage: () => cy.get('[data-qa-alert-message="true"]')
        }
    }

    verifyPage() {
        cy.verify('Sign in to Slack')
    }

    clickSignIn() {
        this.locators.signInButton().click()
    }

    validateEmailErrorMessage(message) {
        this.locators.errorMessages.emailErrorMessage().invoke('text').should('equal', message)
    }
}

module.exports = new signInPage();