import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 1
        }
    }
    render() {
        return (
            <div>
                <div>
                    counter: {this.state.counter}
                </div>
                <button onClick=
                    {
                        () => console.log('clicked')
                    }>
                    plus
                </button>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)