import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 1
        }

        setInterval(() => {
            this.setState({ counter: this.state.counter + 1 })
        }, 1000)
    }
    render() {
        console.log('renderöidään', this.state.counter)
        return (
            <div>
                <h1>
                    {this.state.counter}
                </h1>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)