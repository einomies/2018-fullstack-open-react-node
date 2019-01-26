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
        return (
            <div>
                value: {this.state.value}
                <p></p>
                {/* ei toimi: */}
                {/* <button>nollaa</button> */}
                {/* <button onClick={'roskaa'}>nappi</button> */}
                {/* <button onClick={this.state.value + 1}>nappi</button> */}
                {/* <button onClick={this.state.value = 0}>nappi</button> */}
                {/* <button onClick={console.log('nappia painettu')}>nappi</button> */}
                {/* <button onClick={this.setState({ value: 0 })}>nappi</button> */}

                {/* toimii: */}
                <button onClick={() => this.setState({ value: 0 })}>nappi</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
