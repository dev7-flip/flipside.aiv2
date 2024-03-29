import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main1 from './components/Main1';
import Whywork from './components/whywork/Whywork';
import Footer from './components/Footer';
import Privacy from './components/policies/privacy-policies';
import Cookies from './components/policies/cookies';
import Services from './components/Services';
import Careers from './components/Careers';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './css/Main.css';



class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Navbar />
        <Route exact path="/" render={props => (
          <React.Fragment>          
            <Header />
            <Main1 />
          </React.Fragment>
        )} />
        <Route path="/whywork" component={Whywork} />
      <Route path="/privacy and policy" component={Privacy} />
      <Route path="/Services" component={Services} />
      <Route path="/careers" component={Careers} />
      </Router>
    <Footer />  
    <Cookies />
    
    </div>
    );
  }
}

export default App;



