/*
Map muodostaa taulukon perusteella uuden taulukon, jonka jokainen alkio muodostetaan map:in parametrina olevan funktion avulla. Kuten tulemme kurssin osassa2 näkemään, mapia käytetään Reactissa todella usein.
*/

const t = [1, 2, 3, 4]

const m1 = t.map((luku) => luku * 2)
console.log(m1) // tulostuu [2, 4, 6, 8]

const m2 = t.map((luku) => '<li>' + luku + '</li>')
console.log(m2) // tulostuu [ '<li>1</li>', '<li>2</li>', '<li>3</li>', '<li>4</li>' ]
