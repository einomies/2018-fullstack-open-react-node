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

  render() {
    const Statistics = () => {
      return (
        <div>
          <h2>Statistiikka</h2>
          <Statistic otsikko="hyvä" sisalto={this.state.hyva} />
          <Statistic otsikko="neutraali" sisalto={this.state.neutraali} />
          <Statistic otsikko="huono" sisalto={this.state.huono} />
          <p />
          <Statistic otsikko="yhteensä lkm" sisalto={this.state.yhteensaLkm} />
          <Statistic otsikko="summa" sisalto={this.state.summa} />
          <Statistic
            otsikko="keskiarvo"
            sisalto={this.state.summa / this.state.yhteensaLkm}
          />
          <Statistic
            otsikko="positiivisia"
            sisalto={(this.state.hyva / this.state.yhteensaLkm) * 100}
            merkki="%"
          />
        </div>
      );
    };

    const Statistic = ({ otsikko, sisalto, merkki }) => {
      return (
        <div>
          {otsikko}: {sisalto} {merkki}
        </div>
      );
    };

    return (
      <div>
        <h2>Anna palautetta</h2>
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
