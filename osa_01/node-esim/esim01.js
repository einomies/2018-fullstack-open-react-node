/*
const ei oikeastaan määrittele muuttujaa vaan vakion, jonka arvoa ei voi enää muuttaa. let taas määrittelee normaalin muuttujan.

Esimerkistä näemme myös, että muuttujan tallettaman tiedon tyyppi voi vaihtaa tyyppiä suorituksen aikana, y tallettaa aluksi luvun ja lopulta merkkijonon.
*/
const x = 1
let y = 5

console.log(x, y)  // tulostuu 1, 5
y += 10
console.log(x, y)  // tulostuu 1, 15
y = 'teksti'
console.log(x, y)  // tulostuu 1, teksti
// x = 4              // aiheuttaa virheen
