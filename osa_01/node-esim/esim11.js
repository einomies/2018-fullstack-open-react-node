const arto = {
    nimi: 'Arto Hellas',
    tervehdi: function () {
        console.log('hello, my name is', this.nimi)
    },
    laskeSumma: function (a, b) {
        console.log(a + b)
    }
}

arto.tervehdi()        // tulostuu hello, my name is Arto Hellas

const viiteTervehdykseen = arto.tervehdi
viiteTervehdykseen()   // tulostuu hello, my name is undefined