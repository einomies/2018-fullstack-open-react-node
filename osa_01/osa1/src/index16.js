import React from 'react'
import ReactDOM from 'react-dom'

// Tapahtumankäsittelijöiden määrittely suoraan JSX-templatejen sisällä ei useimmiten ole kovin viisasta.
// Eriytetään nappien tapahtumankäsittelijät omiksi metodeikseen.

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 1
        }
        this.kasvataYhdella = this.kasvataYhdella.bind(this)
        this.nollaa = this.nollaa.bind(this)
    }

    kasvataYhdella() {
        // console.log(this)
        this.setState({ counter: this.state.counter + 1 })
    }

    nollaa() {
        // console.log(this)
        this.setState({ counter: 0 })
    }

    render() {
        return (
            <div>
                <div>
                    counter: {this.state.counter}
                </div>
                <div>
                    {/* <button onClick={this.kasvataYhdella.bind(this)}> */}
                    <button onClick={this.kasvataYhdella.bind(this)}>
                        plus
                    </button>
                    {/* <button onClick={this.nollaa.bind(this)}> */}
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