import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 1
        }
    }

    render() {
        return (
            <div>counter: {this.state.counter}</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)