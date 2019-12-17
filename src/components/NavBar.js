import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Dandy_Brewing_Logo.png';

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
      <Link to="/">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            height="150"
            width="200"
            alt="Company Logo"></img>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Link to="/" className="nav-link"><Nav.Link href="#home">HOME</Nav.Link></Link>
          <Link to="/beers" className="nav-link"><Nav.Link href="#beers">BEERS</Nav.Link></Link>
          <Link to="/tasting/room" className="nav-link"><Nav.Link href="#tasting-room">TASTING ROOM</Nav.Link></Link>
          <Link to="/find/us" className="nav-link"><Nav.Link href="#find-us">WHERE TO FIND US</Nav.Link></Link>
          <Link to="/artist/residence" className="nav-link"><Nav.Link href="#artist-in-residence">ARTIST IN RESIDENCE</Nav.Link></Link>
          <Link to="/story" className="nav-link"><Nav.Link href="#story">STORY</Nav.Link></Link>
          <Link to="/contact" className="nav-link"><Nav.Link href="#contact-us">CONTACT US</Nav.Link></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}