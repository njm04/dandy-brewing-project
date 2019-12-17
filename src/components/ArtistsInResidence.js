import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import kegs from '../assets/images/Kegs_resized.jpg';
import tanks from '../assets/images/Tanks_resized.jpg';

export const ArtistInResidence = () => {
  return (
    <div className="w3-animate-opacity">
      <div className="artists-cover-image">
        <div className="program mx-auto">
          <h1>Artist In Residence</h1>
          {/* <p>Serving 20 taps of exceptional craft beer, fine drinking food, cocktails and wine.</p> */}
        </div>
      </div>
      <div className="row">
        <div className="program-content mx-auto col-8">
          <h3>The Program</h3>
          <div className="text-monospace">
            <p>The Dandy Brewing Company Artist in Residency is a program aimed at visual artists in Alberta.</p>
            <p>Dandy has long valued the visual arts and this program is designed to support those who make the Alberta scene so exciting.</p>
            <p>The program provides a small stipend every month, for 6 months. Throughout the 6 months Artists are also encouraged to collaborate with the Dandies on events and projects!</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="current col-6">
          <h3>Current Artist</h3>
          <div className="current-artist">
            <Card>
              <Card.Img variant="top" src={kegs} />
              <Card.Body>
                <Card.Title>Jacqueline Huskisson <a href="http://jacquelinehuskisson.com" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-square-alt"></i></a></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Bio (courtesy of website):</Card.Subtitle>
                <Card.Text className="text-monospace">
                  <p>Originally from a sleepy mountain town, I now run my graphic design and illustration studio from Calgary, Canada. My focus is creating thoughtful, memorable work for brands, publications, and agencies across North America. (And other places, too!)</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="past col-6">
          <h3>Past Artist</h3>
          <div className="past-artist">
            <Carousel>
              <Carousel.Item>
                <Card>
                  <Card.Img variant="top" src={tanks} />
                  <Card.Body>
                    <Card.Title>Chris Pecora (Calgary, AB) <a href="http://chrispecora.com/" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-square-alt"></i></a></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Bio (courtesy of website):</Card.Subtitle>
                    <Card.Text className="text-monospace">
                      <p>Originally from a sleepy mountain town, I now run my graphic design and illustration studio from Calgary, Canada. My focus is creating thoughtful, memorable work for brands, publications, and agencies across North America. (And other places, too!)</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card>
                  <Card.Img variant="top" src={tanks} />
                  <Card.Body>
                    <Card.Title>Kelsey Fraser (Calgary, AB) <a href="http://google.com" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-square-alt"></i></a></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Bio (courtesy of website):</Card.Subtitle>
                    <Card.Text className="text-monospace">
                      <p>Originally from a sleepy mountain town, I now run my graphic design and illustration studio from Calgary, Canada. My focus is creating thoughtful, memorable work for brands, publications, and agencies across North America. (And other places, too!)</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}