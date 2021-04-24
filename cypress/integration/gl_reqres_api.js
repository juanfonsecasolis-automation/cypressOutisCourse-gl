describe('Test 8: Verify pagination works by returning 6 user at the time', () => {

    it('should invoke the GET request and verify 6 users were returned', () => {
        // TODO: find a way to add a second baseUrl (like $ npm run cypress:open --config "baseUrl=myUrl")
        cy.request('https://reqres.in/api/users?page=1').then((response) => {   
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('per_page')
            expect(response.body).property('data').property('length').eq(6)
        })
    })

})

describe('Test 9: verify that each user returned contains personal information', () => {

    it('should invoke the GET request and check the fields', () => {
        cy.request('https://reqres.in/api/users?page=1').its('body').as('body')
        cy.get('@body').its('data').then(int => {
            int.forEach(element => {
                cy.log(element.email)
                expect(element).to.have.property('id')
                expect(element).to.have.property('email')
                expect(element).to.have.property('first_name')
                expect(element).to.have.property('last_name')
                expect(element).to.have.property('avatar')
            });
        })
        
    })

})