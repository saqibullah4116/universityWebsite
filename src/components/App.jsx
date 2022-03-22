import React from 'react';
import Navbar from './includes/Navbar';
import Footer from './includes/Footer';
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './pages/About';
import Services from "./pages/Services";
import Testimonial1 from "./pages/Testimonial1";

function App(){
  return (
      <>
        <Router>
          <Navbar />
          <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/testimonial">
            <Testimonial1 />
          </Route>
        </Switch>
          <Footer />
          </Router>
      </>
  );
}

export default App;