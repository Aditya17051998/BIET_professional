import React, { Component } from 'react';
import Footer from './Footer';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import SignIn from './SignIn';
import Register from './Register';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                   <Navbar />
                   <Switch>
                     <Route exact path="/" component={Home} />
                     <Route exact path="/signIn" component={SignIn} />
                     <Route exact path="/signUp" component={Register} />

                   </Switch>
                   

                   <Footer />

                </div>

            </Router>
                
        );
    }
}

export default App;