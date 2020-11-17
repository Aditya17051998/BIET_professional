import React, { Component } from 'react';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';

class App extends Component {
    render() {
        return (
                <div className="App">
                   <Navbar />
                   <Home />
                   <Footer />

                </div>
        );
    }
}

export default App;