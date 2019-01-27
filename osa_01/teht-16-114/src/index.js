import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
    }
  }

  klikHyva = () => {
    this.setState({ hyva: this.state.hyva + 1 })
  }

  klikNeutraali = () => this.setState({ neutraali: this.state.neutraali + 1 })

  klikHuono = () => this.setState({ huono: this.state.huono + 1 })

  summa = () => {
    return this.state.hyva + this.state.neutraali + this.state.huono
  }

  render() {

    const Statistiikka = () => {
      return (
        <div>
          <h1>Statistiikka</h1>
          hyvä: {this.state.hyva}
          <p></p>
          neutraali: {this.state.neutraali}
          <p></p>
          huono: {this.state.huono}
          <p></p>
          summa: {this.summa}
          <p></p>
          keskiarvo: {this.state.keskiarvo}
          <p></p>
          positiivisia: {this.state.positiivisia}
        </div>
      )
    }

    // console.log(this.state)
    const setToValue = (newValue) => () => {
      this.setState({ value: newValue })
    }

    return (
      <div>
        <h1>Anna palautetta</h1>
        <button onClick={this.klikHyva}>hyvä</button>
        <button onClick={this.klikNeutraali}>neutraali</button>
        <button onClick={this.klikHuono}>huono</button>
        <p></p>
        <Statistiikka />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
