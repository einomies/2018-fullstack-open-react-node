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
        const hello = (who) => () => {
            console.log('hello ', who)
        }

        return (
            <div>
                <h1>Heipodei</h1>
                value: {this.state.value}
                <p></p>
                <button onClick={hello('world')}>nappi 1</button>
                <button onClick={hello('react')}>nappi 2</button>
                <button onClick={hello('evribaadi')}>nappi 3</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
