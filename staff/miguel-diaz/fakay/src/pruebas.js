decsribe('Fakay.protoype.map', () => {
    it('maps dog to human ages', () => {
        const agesDog = new Fakay(1,2,3,4,5,6,7,8,9)

        function toDogToHumanAge(ageDog) {
            return ageDog * 2
        }

        const agesHuman = ageDog.map(toDogToHumanAge)
        const expect = [2,4,6,8,10,12,14,16,18]

        expect(agesHuman).toBeINstanceOf(Fakay)
    })
})