import React from 'react';
import './App.css';
import './contact.css';
import { NavBar } from './components/NavBar';
import { DandyBrewingCarousel } from './components/Carousel';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Beers } from './components/Beers';
import { TastingRoom } from './components/TastingRoom';
import { ArtistInResidence } from './components/ArtistsInResidence';
import { Story } from './components/Story';
import { ContactUs } from './components/ContactUs';
import { FindUs } from './components/FindUs';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App w3-center w3-animate-top">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <DandyBrewingCarousel />
            <Home />
          </Route>
          <Route exact path="/beers">
            <Beers />
          </Route>
          <Route exact path="/tasting/room">
            <TastingRoom />
          </Route>
          <Route exact path="/find/us">
            <FindUs />
          </Route>
          <Route exact path="/artist/residence">
            <ArtistInResidence />
          </Route>
          <Route exact path="/story">
            <Story />
          </Route>
          <Route exact path="/contact">
            <ContactUs />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
