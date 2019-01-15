import React from 'react'
import ReactDOM from 'react-dom'

// Tapahtumankäsittelijöiden määrittely suoraan JSX-templatejen sisällä ei useimmiten ole kovin viisasta.
// Eriytetään nappien tapahtumankäsittelijät omiksi metodeikseen.

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
            , kiku: 'abc'
        }
        this.kasvataYhdella = this.kasvataYhdella.bind(this)
        this.nollaa = this.nollaa.bind(this)
    }

    kasvataYhdella = () => {
        // this.setState({ counter: this.state.counter + 1 })
        this.setState(
            (prevState) => ({ counter: prevState.counter + 1 })
        )
        this.setState({ kiku: 'xxx' })
    }

    nollaa = () => {
        this.setState({ counter: 0 })
        this.setState({ kiku: 'abc' })
    }

    render() {
        return (
            <div>
                <div>
                    counter: {this.state.counter}
                    <p></p>
                    kiku: {this.state.kiku}
                </div>
                <div>
                    <button onClick={this.kasvataYhdella.bind(this)}>
                        plus
                    </button>
                    <button onClick={this.nollaa.bind(this)}>
                        zero
                    </button>
                </div>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)