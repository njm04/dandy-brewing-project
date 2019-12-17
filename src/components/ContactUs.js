import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';

export const ContactUs = () => {
  return (
    <div className="w3-animate-opacity">
      <div className="contact-cover-image">
        <div className="contact-us mx-auto">
          <h1>Contact Us</h1>
          <p>Questions. Comments. Concerns.</p>
        </div>
      </div>
      <div className="row" style={{ padding: "70px" }}>
        <div className="container contact col-6">
          <div className="row">
            <div className="col-md-3 bg-secondary">
              <div className="contact-info">
                {/* <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image" /> */}
                <i class="fas fa-envelope"></i>
                <h2>Contact Us</h2>
                <h4>We would love to hear from you !</h4>
              </div>
            </div>
            <div className="col-md-9 text-justify">
              <div className="contact-form">
                <div className="form-group">
                  <label className="control-label col-sm-3" for="fname">First Name:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-3" for="lname">Last Name:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-3" for="email">Email:</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-3" for="comment">Comment:</label>
                  <div className="col-sm-10">
                    <textarea className="form-control" rows="5" id="comment"></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-default">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <Card>
            <Card.Body>
              <Card.Title>The Dandy Brewing Company</Card.Title>
              <Card.Text>
                <p>2003 11th Street SE, Calgary, AB.</p>
                <p><strong>Please note: </strong>at this time, due to our limited space, we do not take reservations, nor do we book private tours in the tasting room.</p>
              </Card.Text>
              <Card.Title>Hours</Card.Title>
              <ListGroup className="mx-auto hours">
                <ListGroup.Item>Monday: Closed</ListGroup.Item>
                <ListGroup.Item>Tuesday: 11:30am-10pm</ListGroup.Item>
                <ListGroup.Item>Wednesday 11:30am-10pm</ListGroup.Item>
                <ListGroup.Item>Thursday 11:30am-10pm</ListGroup.Item>
                <ListGroup.Item>Friday 11:30am-Midnight</ListGroup.Item>
                <ListGroup.Item>Saturday 10am-Midnight</ListGroup.Item>
                <ListGroup.Item>Sunday 10am-8pm</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}