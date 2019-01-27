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
        <Osa osa={osat[0]}></Osa>
        <p></p>
        <Osa osa={osat[1]}></Osa>
        <p></p>
        <Osa osa={osat[2]}></Osa>
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
        Yhteensä {props.osat[0].tehtavia+props.osat[1].tehtavia+props.osat[2].tehtavia} tehtävää
      </div>
    )
  }

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osat={osat} />
      <Yhteensa osat={osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)