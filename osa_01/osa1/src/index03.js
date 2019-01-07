import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = [
    {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    },
    {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    },
    {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
  ]

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osat={osat} />
      <Yhteensa osat={osat} />
    </div>
  )
}

const Otsikko = (props) => {
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  )
}

const Sisalto = ({ osat }) => {
  return (
    <div>
      <Osa osa={osat[0]}></Osa>
      <Osa osa={osat[1]}></Osa>
      <Osa osa={osat[2]}></Osa>
    </div>
  )
}

const Osa = ({ osa }) => {
  return (
    <div>
      <p>{osa.nimi} {osa.tehtavia}</p>
    </div>
  )
}

const Yhteensa = ({ osat }) => {
  const a = osat[0].tehtavia
  const b = osat[1].tehtavia
  const c = osat[2].tehtavia
  return (
    <div>
      <p>yhteensä {summa(a, b, c)} tehtävää</p>
    </div>
  )
}


function summa(a, b, c) {
  return a + b + c
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)