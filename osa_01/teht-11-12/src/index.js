import React from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const { counter } = props
  return (
    <div>{counter.value}</div>
  )
}

const counter = {
  value: 0 + 1
}

ReactDOM.render(
  <App counter={counter} />,
  document.getElementById('root')
)