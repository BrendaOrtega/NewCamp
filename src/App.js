import React, { Component } from 'react';
import Routes from './Routes'
import "./App.css"
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Routes />
                <Footer/>
            </div>
        )
    }
}

export default App;