import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            value: 10
        }
    }

    render() {
        const setToValue = (newValue) => () => {
            console.log('uusi arvo: ', newValue)
            this.setState({ value: newValue })
        }

        return (
            <div>
                <h1>Heipodei</h1>
                value: {this.state.value}
                <p></p>
                <button onClick={setToValue(1000)}>tuhat</button>
                <button onClick={setToValue(0)}>nollaa</button>
                <button onClick={setToValue(this.state.value + 1)}>kasvata +1</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
