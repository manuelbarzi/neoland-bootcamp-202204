describe('Fakay.prototype.groupBy', () => {

    const inventory = new Fakay(
        { name: 'asparagus', type: 'vegetables', quantity: 5 },
        { name: 'bananas',  type: 'fruit', quantity: 0 },
        { name: 'goat', type: 'meat', quantity: 23 },
        { name: 'cherries', type: 'fruit', quantity: 5 },
        { name: 'fish', type: 'meat', quantity: 22 }
    )

    it('should group foods by type', () => {

        expectedResult = {
            vegetables: new Fakay(
                { name: 'asparagus', type: 'vegetables', quantity: 5 }, 
            ),
              fruit: new Fakay(
                { name: "bananas", type: "fruit", quantity: 0 },
                { name: "cherries", type: "fruit", quantity: 5 }
              ), 
              meat: new Fakay(
                { name: "goat", type: "meat", quantity: 23 },
                { name: "fish", type: "meat", quantity: 22 }
              )
        }

        result = inventory.groupBy(({type}) => type)

        expect(result).toEqual(expectedResult)

    })

    it('should group by foods to restock or ok if quantity is more than 5', () => {

        const expectedResult = { 
            restock: new Fakay(
              { name: "asparagus", type: "vegetables", quantity: 5 },
              { name: "bananas", type: "fruit", quantity: 0 },
              { name: "cherries", type: "fruit", quantity: 5 }
            ), 
            ok: new Fakay(
              { name: "goat", type: "meat", quantity: 23 },
              { name: "fish", type: "meat", quantity: 22 }
            )
          }

        const result = inventory.groupBy(({quantity}) => {
            return quantity > 5 ? 'ok' : 'restock'
        })        
        
        expect(result).toEqual(expectedResult)

    })


})