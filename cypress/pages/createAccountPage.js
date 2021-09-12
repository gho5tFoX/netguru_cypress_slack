class createAccountPage {

    locators = {
        email: () => cy.get('[data-qa="email_field"]'),
        continueButton: () => cy.get('[data-qa="submit_button"]'),

        errorMessages: {
            emailErrorMessage: () => cy.get('[data-qa-alert="true"]')
        }
    }

    verifyPage() {
        cy.verify('First, enter your email')
    }

    typeEmail(email) {
        this.locators.email().type(email)
    }

    clickContinue() {
        this.locators.continueButton().click()
    }

    validateEmailErrorMessage(message) {
        this.locators.errorMessages.emailErrorMessage().invoke('text').should('equal', message)
    }

}

module.exports = new createAccountPage();