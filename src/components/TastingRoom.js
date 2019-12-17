import React from 'react';
import { ListGroup, Card, Carousel } from 'react-bootstrap';
import greenSalad from '../assets/images/Green Salad.jpg';
import beef from '../assets/images/Beef-cheek-ragu-resized.jpg';
import champagne from '../assets/images/Caviar-Martini-Champagne-Rose-resized.jpg';
import kegs from '../assets/images/Kegs_resized.jpg';

export const TastingRoom = () => {
  return (
    <div className="w3-animate-opacity">
      <div className="tasting-room-cover-image">
        <div className="tasting-room mx-auto">
          <h1>The Tasting Room</h1>
          <p>Serving 20 taps of exceptional craft beer, fine drinking food, cocktails and wine.</p>
        </div>
      </div>
      <div className="what-we-do text-monospace">
        <p>The Dandy Brewing Company and Tasting Room is a unique experience located in the heart of Ramsay.</p>
        <p>The modern space features 20 taps of Dandy Beers (maybe a few rad guest taps), a curated cocktail list</p>
        <p>featuring local spirit, a daily selection of top quality wines available by the glass.</p>

        <p>Making the experience even better is a menu of drinking food, rooted in the fine dining. Chef Merritt</p>
        <p>Gordon has put together something amazing, enhancing the already indulgent experience.</p>

        <p>Open Daily for lunch and dinner service, as well as brunch on weekends.</p>
      </div>
      <div className="more-information-cover-image">
        <div className="tasting-room mx-auto">
          <h1>More information</h1>
          <p>Hours. Snacks. Tours.</p>
        </div>
      </div>
      <div className="row more-information">
        <div className="restaurant col-6">
          <h3>Restaurant</h3>
          <div className="restaurant-content text-monospace text-justify">
            <Card>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={greenSalad}
                    alt="Green Salad"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={beef}
                    alt="Beef"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={champagne}
                    alt="Champagne"
                  />
                </Carousel.Item>
              </Carousel>
              <Card.Body>
                <Card.Text>
                  <p>Offering a full lunch, dinner and brunch menu, the Tasting Room brings a unique drinking  menu to the craft beer experience.</p>
                  <p>With snacks, plates, desserts, and a fresh oyster bar, the menu is meant to be shared among friends and lovers. Always evolving, the menu is perfectly paired with all things Dandy.</p>
                  <p>Vegetarian and Vegan options available. Please ask your server.</p>
                  <p>Open for Lunch, Dinner, and Brunch.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="what-we-do col-6">
          <h3>Tasting Room Hours</h3>
          <ListGroup className="mx-auto hours text-monospace">
            <ListGroup.Item>Monday: Closed</ListGroup.Item>
            <ListGroup.Item>Tuesday: 11:30am-10pm</ListGroup.Item>
            <ListGroup.Item>Wednesday 11:30am-10pm</ListGroup.Item>
            <ListGroup.Item>Thursday 11:30am-10pm</ListGroup.Item>
            <ListGroup.Item>Friday 11:30am-Midnight</ListGroup.Item>
            <ListGroup.Item>Saturday 10am-Midnight</ListGroup.Item>
            <ListGroup.Item>Sunday 10am-8pm</ListGroup.Item>
          </ListGroup>
          <br />
          <p><strong>Please note: </strong>Due to AGLC regulations, we are not able to fill growlers or provide offsales at this time.</p>
        </div>
      </div>
      <div className="row">
        <div className="mx-auto shop">
          <h3>Shop</h3>
          <Card className="shop-card">
            <Card.Img variant="top" src={kegs} className="d-block w-100"/>
            <Card.Body>
              <Card.Text className="text-monospace">
                <p>Dandy is pleased to offer a small offering of merchandise.</p>
                <p>Along with  T-Shirts and hats, we are pleased to offer numbered silk screen prints, designed by Artists we are so pleased to call friends, and printed by the team at Burnt Toast Studios.</p>
                <p>We are also excited to announce a collaborative with North American Quality Purveyors on a line of T-shirts and baseball caps. We worked together to design custom cut shirts and hats, that fit a Dandy perfectly.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}