import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      yhteensaLkm: 0,
      summa: 0
    };
  }

  klikHyva = () => {
    this.setState({
      hyva: this.state.hyva + 1,
      yhteensaLkm: this.state.yhteensaLkm + 1,
      summa: this.state.summa + 1
    });
  };

  klikNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali + 1,
      yhteensaLkm: this.state.yhteensaLkm + 1
    });
  };

  klikHuono = () => {
    this.setState({
      huono: this.state.huono + 1,
      yhteensaLkm: this.state.yhteensaLkm + 1,
      summa: this.state.summa - 1
    });
  };

  klikNollaus = () => {
    this.setState({
      hyva: 0,
      neutraali: 0,
      huono: 0,
      yhteensaLkm: 0,
      summa: 0
    });
  };

  // keskiarvo = () => {
  //   return this.state.summa / this.state.yhteensaLkm;
  // };

  render() {
    const keskiarvo = () => {
      return this.state.summa / this.state.yhteensaLkm;
    };
    const Statistics = () => {
      return (
        <div>
          <h1>Statistiikka</h1>
          hyvä: {this.state.hyva}
          <p />
          neutraali: {this.state.neutraali}
          <p />
          huono: {this.state.huono}
          <p />
          yhteensä lkm: {this.state.yhteensaLkm}
          <p />
          summa: {this.state.summa}
          <p />
          keskiarvo: {keskiarvo}
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
        <Statistics />
        <p />
        <button onClick={this.klikNollaus}>nollaus</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
