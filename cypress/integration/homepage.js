describe("returns the homepage", () => {
    it("renders home page",() => {
            
            cy.visit("/")
            cy.get(".container").should("exist")
        
    })

    it("allows navigation to product page and finds text name", () => {
        cy.visit("/headphones")
        
    })
})