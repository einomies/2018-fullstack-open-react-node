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

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osa={osa1}></Sisalto>
      <Sisalto osa={osa2}></Sisalto>
      <Sisalto osa={osa3}></Sisalto>
      <Yhteensa p1={osa1.tehtavia} p2={osa2.tehtavia} p3={osa3.tehtavia} ></Yhteensa>
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

const Sisalto = (props) => {
  return (
    <div>
      <p>{props.nimi} {props.tehtavia}</p>
    </div>
  )
}

const Yhteensa = (p1, p2, p3) => {
  return (
    <div>
      <p>yhteensä {summa(p1,p2,p3)} tehtävää</p>
    </div>
  )
}

function summa(p1, p2, p3) {
  return p1 + p2 + p3
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)