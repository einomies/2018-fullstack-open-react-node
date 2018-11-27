// Nuolifunktio on tullut Javascriptiin vasta version ES6 myötä. Tätä ennen ja paikoin nykyäänkin funktioiden määrittely tapahtui avainsanan function avulla.

// Määrittelytapoja on kaksi, funktiolle voidaan antaa function declaration -tyyppisessä määrittelyssä nimi jonka avulla funktioon voidaan viitata:
function tulo(a, b) {
    return a * b
}
const vastausTulo = tulo(2, 6)
console.log("vastausTulo= " +vastausTulo)

// Toinen tapa on tehdä määrittely funktiolausekkeena.Tällöin funktiolle ei tarvitse antaa nimeä ja määrittely voi sijaita muun koodin seassa:
const keskiarvo = function (a, b) {
    return (a + b) / 2
}
const vastausKeskiarvo = keskiarvo(2, 5)
console.log("vastausKeskiarvo= " +vastausKeskiarvo)
