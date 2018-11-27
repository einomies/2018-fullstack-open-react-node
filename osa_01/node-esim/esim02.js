/*
Huomattavaa esimerkissä on se, että taulukon sisältöä voi muuttaa vaikka sen on määritelty const:ksi. Koska taulukko on olio, viittaa muuttuja koko ajan samaan olioon. Olion sisältö muuttuu sitä mukaa kuin taulukkoon lisätään uusia alkioita.

Eräs tapa käydä taulukon alkiot läpi on esimerkissä käytetty forEach, joka saa parametrikseen nuolisyntaksilla määritellyn funktion

(luku) => {
  console.log(luku)
}
forEach kutsuu funktiota jokaiselle taulukon alkiolle antaen taulukon alkion aina parametrina. forEachin parametrina oleva funktio voi saada myös muita parametreja.
*/

const t = [1, -1, 3]

t.push(5)

console.log(t.length)  // tulostuu 4
console.log(t[1])      // tulostuu -1

t.forEach((luku) => {
  console.log(luku)    // tulostuu 1, -1, 3 ja 5 omille riveilleen
})

t[6] = 99

console.log(t)         // tulostuu [ 1, -1, 3, 5, <2 empty items>, 99 ]+