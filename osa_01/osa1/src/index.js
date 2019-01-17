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
            , random: 0
        }
    }

    asetaArvoon = (arvo) => {
        return () => {
            this.setState({ counter: arvo })
            if (arvo === 0) {
                this.setState({ kiku: 'abc' })
                this.setState({ random: 0 })
            } else {
                this.setState({ kiku: 'xxx' })
                this.setState({random: Math.random()})
            }
        }
    }

    render() {
        return (
            <div>
                <div>
                    counter: {this.state.counter}
                    <p></p>
                    kiku: {this.state.kiku}
                    <p></p>
                    random: {this.state.random}
                    <p></p>
                </div>
                <div>
                    <button onClick={this.asetaArvoon(this.state.counter + 1)}>
                        Plus
                    </button>
                    <button onClick={this.asetaArvoon(0)}>
                        Zero
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