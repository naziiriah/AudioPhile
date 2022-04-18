describe("homepage", () => {
    beforeEach("visit homepage as the starting tests", () => {
        cy.visit("/")
    })
    // it("visit homepage", () => {
    //     cy.get('.home-tag').click();
    //     cy.end()
        
    // })
    // it("check lower-page links",  () => {
    //     cy.get(".footer-home-link").click()
    //     cy.end()
    // })
    // it("check the button on the top section",  () => {        
    // })
    // it("check product-page", () => {
    //     cy.get(".headphone-tag").click()
    //     cy.get(".see-products").should("have.length", 3)
    //     cy.get(".see-products").first().should('have.text', 'see product').click()
    //     cy.contains("new product")
    // })
    // it("to be able to purchase", () => {
        
    //     cy.get(".headphone-tag").click()
    //     cy.get(".see-products").first().click()
    //     cy.get(".add-to-value").click()
    //     cy.get(".to-cart-button").click()
    // })
    // it("visit the checkout page", () => {
        
    //     cy.get(".headphone-tag").click()
    //     cy.get(".see-products").first().click()
    //     cy.get(".add-to-value").click()
    //     cy.get(".to-cart-button").click()
    //     cy.get(".cart-icon").click()
    //     cy.get(".checkout-page").click()
    // })

    // it("to delete an item in cart", () => {
    //     cy.get(".headphone-tag").click()
    //     cy.get(".see-products").first().click()
    //     cy.get(".add-to-value").click()
    //     cy.get(".to-cart-button").click()
    //     cy.get(".cart-icon").click()
    //     cy.get('.delete-icon-4').should('exist')
    //     .click()
    // })
    // it("to add multiple items to cart and remove all of them at once", () => {
    //     cy.get(".headphone-tag").click()
    //     cy.get(".see-products").first().click()
    //     cy.get(".add-to-value").click()
    //     cy.get(".to-cart-button").click()
    //     cy.get(".headphone-tag").click()
    //     cy.get(".see-products").last().click()
    //     cy.get(".add-to-value").click()
    //     cy.get(".to-cart-button").click()
    //     cy.get(".cart-icon").click()
    //     cy.get('.delete-icon-4').should('have.length', 2)
    //     cy.get(".remove-tag").click()
    //     cy.get('.delete-icon-4').should('have.length', 0)
    //     cy.end()
    // })
    it("to visit checkout page after confirming total", () => {
        cy.get(".headphone-tag").click()
        cy.get(".see-products").first().click()
        cy.get(".add-to-value").click()
        cy.get(".to-cart-button").click()
        cy.get(".cart-icon").click()
        cy.get(".checkout-page").click()
        cy.get(".final-modal").click()
        cy.get(".to-home").click()
    })
    
})