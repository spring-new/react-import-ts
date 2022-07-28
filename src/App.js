import React, {Component} from 'react';
// import Header from "./componet/Header/Header";
import './App.css'
import WebRouter from "./WebRouter/Web";


class App extends Component {
    render() {
        return (
            <div className="App">
                <WebRouter/>
            </div>
        );
    }
}

export default App;