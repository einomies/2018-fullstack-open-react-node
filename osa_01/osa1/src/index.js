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
        const handler = () => {
            console.log('nappia painettu')
            this.setState({ value: 0 })
        }
        return (
            <div>
                value: {this.state.value}
                <p></p>
                <button onClick={handler}>nappi</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
