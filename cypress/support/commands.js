
Cypress.Commands.add("product", (q, type, info, limit) => { 
    cy.request({
        url: 'https://tastedive.com/api/similar',
        methode: 'GET',
        qs: {
            q: q,
            type: type,
            limit: limit,
            info: info,
            k: '375546-Personne-3HDDMZ4L'
        }
    }).then(response => {
        cy.log(JSON.stringify(response.body))
        expect(response).to.be.ok
        expect(response.body.Similar.Results).lengthOf(limit)
        expect(response.body.Similar.Info[0].Type).eql(type)
        //expect(response.body.Similar.Info[0].wTeaser).eql('true')
    })
 })