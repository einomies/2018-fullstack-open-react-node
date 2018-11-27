const olio1 = {
    nimi: 'Arto Hellas',
    ika: 35,
    koulutus: 'Filosofian tohtori'
}

const olio2 = {
    nimi: 'Full Stack -websovelluskehitys',
    taso: 'aineopinto',
    laajuus: 5
}

const olio3 = {
    nimi: {
        etunimi: 'Jami',
        sukunimi: 'Kousa'
    },
    arvosanat: [2, 3, 5, 3],
    laitos: 'TKTL',
    rankingIdx: 2.058772634723
}

console.log(olio1.nimi)          // tulostuu Arto Hellas
const kentanNimi = 'ika'
console.log(olio1[kentanNimi])   // tulostuu 35

console.log(olio3)

