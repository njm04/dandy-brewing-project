import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import beers from '../assets/images/Beers_resized.jpg';
import kegs from '../assets/images/Kegs_resized.jpg';
import tanks from '../assets/images/Tanks_resized.jpg';

export const DandyBrewingCarousel = () => {
  const history = useHistory();

  const handleBeerClick = (e) => {
    e.preventDefault();
    history.push('/beers');
  }

  const handleTastingClick = (e) => {
    e.preventDefault();
    history.push('/tasting/room');
  }

  const handleStoryClick = (e) => {
    e.preventDefault();
    history.push('/story');
  }

  return (
    <Carousel className="">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={beers}
          alt="First Slide"
        />

        <Carousel.Caption className="caption">
          <h3>Best Tasting Beers</h3>
          <p>The full Dandy line up of beers. Made in small batches, available province-wide.</p>
          <Button variant="primary" onClick={handleBeerClick}>Get Started</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={kegs}
          alt="Second Slide"
        />

        <Carousel.Caption className="caption">
          <h3>Taste the best beers and more...</h3>
          <p>The Dandy Brewing Company and Tasting Room is a unique experience located in the heart of Ramsay.</p>
          <Button variant="primary" onClick={handleTastingClick}>Get Started</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tanks}
          alt="Third slide"
        />

        <Carousel.Caption className="caption">
          <h3>Exceptional Story</h3>
          <p>Chef. Chemist. Teacher. Business.</p>
          <Button variant="primary" onClick={handleStoryClick}>Find Out The Story</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}