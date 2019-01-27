import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }

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
        <Osa osa={osa1}></Osa>
        <p></p>
        <Osa osa={osa2}></Osa>
        <p></p>
        <Osa osa={osa3}></Osa>
        <p></p>
      </div>
    )
  }

  const Osa = (props) => {
    return (
      <div>
        {props.osa.nimi} {props.osa.tehtavia}
      </div>
    )
  }

  const Yhteensa = (props) => {
    return (
      <div>
        Yhteensä {props.osa1.tehtavia + props.osa2.tehtavia + props.osa3.tehtavia} tehtävää
      </div>
    )
  }

  return (
    <div>
      <Otsikko kurssi={kurssi}></Otsikko>
      <Sisalto osa1={osa1} osa2={osa2} osa3={osa3}></Sisalto>
      <Yhteensa osa1={osa1} osa2={osa2} osa3={osa3}></Yhteensa>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)