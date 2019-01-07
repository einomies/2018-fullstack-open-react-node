import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  return (
    <div>
      <Hello name="Gösta" age={45} />
      <Hello name="Aarne" age={51} />
      <Hello name="Olavi" age={58} />
    </div>
  )
}

class Hello extends React.Component {
  render() {
    return (
      <div>
        <p>Hello {this.props.name}, you are {this.props.age} years old</p>
      </div>
    )
  }
}

// const Hello = (props) => {
//   return (
//     <div>
//       <p>Hello {props.name}, you are {props.age} years old</p>
//     </div>
//   )
// }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)