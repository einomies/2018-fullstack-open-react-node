import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      yhteensa: 0,
      kaikki: []
    };
  }

  klikHyva = () => {
    this.setState({
      hyva: this.state.hyva + 1,
      yhteensa: this.state.yhteensa + 1
    });
  };
  klikNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali + 1,
      yhteensa: this.state.yhteensa + 1
    });
  };
  klikHuono = () => {
    this.setState({
      huono: this.state.huono + 1,
      yhteensa: this.state.yhteensa + 1
    });
  };

  render() {
    const Statistiikka = () => {
      return (
        <div>
          <h1>Statistiikka</h1>
          hyvä: {this.state.hyva}
          <p />
          neutraali: {this.state.neutraali}
          <p />
          huono: {this.state.huono}
          <p />
          yhteensä: {this.state.yhteensa}
          <p />
          keskiarvo: {this.state.keskiarvo}
          <p />
          positiivisia: {this.state.positiivisia}
        </div>
      );
    };

    return (
      <div>
        <h1>Anna palautetta</h1>
        <button onClick={this.klikHyva}>hyvä</button>
        <button onClick={this.klikNeutraali}>neutraali</button>
        <button onClick={this.klikHuono}>huono</button>
        <p />
        <Statistiikka />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
