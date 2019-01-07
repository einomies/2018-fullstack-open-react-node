const arto = {
    nimi: 'Arto Hellas',
    tervehdi: function () {
        console.log('hello, my name is', this.nimi)
    }
}

setTimeout(arto.tervehdi, 1000)
// hello, my name is undefined

setTimeout(arto.tervehdi.bind(arto), 1000)
// hello, my name is Arto Hellas
