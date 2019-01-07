import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  return (
    <div>
      <Hello name="Gösta" age={46} />
      <Hello name="Aarne" age={52} />
      <Hello name="Olavi" age={59} />
    </div>
  )
}

class Hello extends React.Component {
  render() {
    const {age, name} = this.props
    const bornYear = () => new Date().getFullYear() - age
    return (
      <div>
        <p>
          Hello {name}, you are {age} years old. <br />
          So you were probably born in {bornYear()} or {bornYear() + 1}
        </p>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)