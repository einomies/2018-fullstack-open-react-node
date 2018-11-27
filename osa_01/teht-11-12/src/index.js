import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  )
}

const Sisalto = (props) => {
  return (
    <div>
      <Osa nimi={props.o1.nimi} tehtLkm={props.o1.tehtLkm}></Osa>
      <Osa nimi={props.o2.nimi} tehtLkm={props.o2.tehtLkm}></Osa>
      <Osa nimi={props.o3.nimi} tehtLkm={props.o3.tehtLkm}></Osa>
    </div>
  )
}

const Osa = (props) => {
  return (
    <div>
      <p>{props.nimi} {props.tehtLkm}</p>
    </div>
  )
}

const Yhteensa = (props) => {
  return (
    <div>
      <p>yhteensä {props.tehtLkm} tehtävää</p>
    </div>
  )
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  let osa01 = { nimi: 'Reactin perusteet', tehtLkm: 10 };
  let osa02 = { nimi: 'Tiedonvälitys propseilla', tehtLkm: 7 };
  let osa03 = { nimi: 'Komponenttien tila', tehtLkm: 14 };
  let osat = [osa01, osa02, osa03];
  
  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto o1={osa01} o2={osa02} o3={osa03}></Sisalto>
      <Yhteensa tehtLkm={osa01.tehtLkm + osa02.tehtLkm + osa03.tehtLkm}></Yhteensa>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)