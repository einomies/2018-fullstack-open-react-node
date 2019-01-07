/*
Olioiden metodit ja this
Kaikille kolmelle tavalle määritellä funktio on oma paikkansa.

Nuolifunktiot ja avainsanan function avulla määritellyt funktiot kuitenkin poikkeavat radikaalisti siitä miten ne käyttäytyvät avainsanan this suhteen.

Voimme liittää oliolle metodeja määrittelemällä niille kenttiä, jotka ovat funktioita:
*/
const arto1 = {
    nimi: 'Arto Hellas',
    ika: 35,
    koulutus: 'Filosofian tohtori',
    tervehdi: function () {
        console.log('hello, my name is', this.nimi)
    }
}
arto1.tervehdi()  // tulostuu hello, my name is Arto Hellas

//  metodeja voidaan liittää olioille myös niiden luomisen jälkeen:
const arto2 = {
    nimi: 'Arto Hellas',
    ika: 35,
    koulutus: 'Filosofian tohtori',
    tervehdi: function () {
        console.log('hello, my name is', this.nimi)
    }
}

arto2.vanhene = function () {
    this.ika += 1
}

console.log(arto2.ika)  // tulostuu 35
arto2.vanhene()
console.log(arto2.ika)  // tulostuu 36


