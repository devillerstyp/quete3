describe('Request API tests', () => {
	let product = require('../../fixtures/jdd')
	it('Tester musique', () => {
		cy.product(product[0].q, product[0].type, product[0].info, product[0].limit)
		
	})

	it('tester film', () => {
		cy.product(product[1].q, product[1].type, product[1].info, product[1].limit)
	})
})




/*
{
	"Similar": {
		"Info": [{
				"Name": "Coldplay",
				"Type": "music"
			}
		],
		"Results": [{
				"Name": "Keane",
				"Type": "music"
			}, {
				"Name": "Snow Patrol",
				"Type": "music"
			}, {
				"Name": "Muse",
				"Type": "music"
			}, {
				"Name": "The Killers",
				"Type": "music"
			}, {
				"Name": "Oasis",
				"Type": "music"
			}
		]
	}
}

*/