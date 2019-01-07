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
    const bornYear = () => {
      const yearNow = new Date().getFullYear()
      return yearNow - this.props.age
    }

    return (
      <div>
        <p>
          Hello {this.props.name}, you are {this.props.age} years old <br />
          So you were probably born {bornYear()}
        </p>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)