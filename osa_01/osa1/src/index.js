import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const nimi = "Pekka"
    const ika = 10
    return (
        <div>
            <h1>Heipodei</h1>
            <Hello name="Arto" age={26 + 10} />
            <Hello name={nimi} age={ika / 0.4} />
            <Footer />
        </div>
    )
}

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} years old</p>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))