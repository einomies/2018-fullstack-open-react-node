import React from 'react'
import ReactDOM from 'react-dom'

// tehtävä(t):
// 1.1
// 1.2

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'

  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10

  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7

  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

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
        <Osa nimi={osa1} tehtLkm={tehtavia1}></Osa>
        <Osa nimi={osa2} tehtLkm={tehtavia2}></Osa>
        <Osa nimi={osa3} tehtLkm={tehtavia3}></Osa>
      </div>
    )
  }

  const Osa = (props) => {
    return (
      <div>
        <p>
          {props.nimi} {props.tehtLkm}
        </p>
      </div>
    )
  }

  const Yhteensa = (props) => {
    return (
      <div>
        <p>
          yhteensä {tehtavia1 + tehtavia2 + tehtavia3} tehtävää
        </p>
      </div>
    )
  }

  return (
    <div>
      <Otsikko kurssi={kurssi}></Otsikko>
      <Sisalto></Sisalto>
      {/* <Yhteensa tehtLkm={tehtavia1 + tehtavia2 + tehtavia3}></Yhteensa> */}
      <Yhteensa></Yhteensa>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)