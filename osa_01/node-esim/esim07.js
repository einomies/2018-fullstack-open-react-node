// Funktio joka saa 2 parametria:
const summa = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}
let nro1 = 2
let nro2 = 3
const nro3 = 7
const tulos = summa(nro1, nro2)
console.log("nro1=" + nro1 + " nro2=" + nro2 + " summa=" + tulos)

// Jos parameteja on vain yksi, voidaan sulut jättää määrittelystä pois:
const nelioV1 = p => {
    console.log(p)
    return p * p
}
// Jos funktio sisältää ainoastaan yhden lausekkeen, ei aaltosulkeita tarvita. Tällöin funktio palauttaa ainoan lausekkeensa arvon. Eli edellinen voitaisiin ilmaista lyhyemmin seuraavasti:
const nelioV2 = p => p * p

const t = [1, 2, 3]
const tnelio = t.map(p => p * p)
// tnelio on nyt [1, 4, 9]