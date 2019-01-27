import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
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
  }

  const Otsikko = (props) => {
    return (
      <div>
        <h1>{props.kurssi.nimi}</h1>
      </div>
    )
  }

  const Sisalto = (props) => {
    return (
      <div>
        <Osa osa={props.osat[0]}></Osa>
        <p></p>
        <Osa osa={props.osat[1]}></Osa>
        <p></p>
        <Osa osa={props.osat[2]}></Osa>
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
        Yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia} tehtävää
      </div>
    )
  }

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
    </div >
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)