describe('Verify pagination works by returning 6 user at the time', () => {

    it('should access the data throug GET', () => {
        cy.request('https://reqres.in/api/users?page=1').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('per_page')
            expect(response.body).property('data').property('length').eq(6)
        })
    })

})