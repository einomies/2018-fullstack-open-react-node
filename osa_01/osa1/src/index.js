import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            value: 10
        }
    }

    handler = () => {
        console.log('nappia painettu')
        this.setState({ value: 0 })
    }

    render() {
        const hello = () => {
            const handler = () => console.log('hello world')
            return handler
        }
        return (
            <div>
                value: {this.state.value}
                <p></p>
                <button onClick={hello()}>nappi</button>
                {/* yo. rivillä tapahtumakäsittelijä (onClick) on käytännössä funktiokutsun
                hello() paluuarvo, jolloin rivi on sama kuin alla:
                <button onClick={() => console.log('hello world')}>nappi</button> */}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
