/*
Taulukon yksittäisiä alkioita on helppo sijoittaa muuttujiin destrukturoivan sijoituslauseen avulla:
*/
const t = [1, 2, 3, 4, 5]

const [eka, toka, ...loput] = t

console.log("t: " + t)

console.log("eka: " + eka)      // tulostuu 1, 2
console.log("toka: " + toka)      // tulostuu 1, 2

console.log("loput: " + loput)          // tulostuu [3, 4 ,5]
/*
Eli muuttujiin eka ja toka tulee sijoituksen ansiosta taulukon kaksi ensimmäistä lukua. Muuttujaan loput “kerätään” sijoituksesta jäljellejääneet luvut omaksi taulukoksi.
*/