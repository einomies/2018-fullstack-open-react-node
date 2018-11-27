const olio1 = {
    nimi: 'Arto Hellas',
    ika: 35,
    koulutus: 'Filosofian tohtori'
}

// Olioiden kenttiin viitataan pistenotaatiolla, tai hakasulkeilla:
console.log(olio1.nimi)          // tulostuu Arto Hellas
const kentanNimi = 'ika'
console.log(olio1[kentanNimi])   // tulostuu 35

// Olioille voidaan lisätä kenttiä myös lennossa joko pistenotaation tai hakasulkeiden avulla:
olio1.osoite = 'Tapiola'
olio1['salainen numero'] = 12341
console.log(olio1)

// Jälkimmäinen lisäyksistä on pakko tehdä hakasulkeiden avulla, sillä pistenotaatiota käytettäessä ‘salainen numero’ ei kelpaa kentän nimeksi.
