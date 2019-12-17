import React from 'react';
import { ListGroup } from 'react-bootstrap';

export const FindUs = () => {
  return (
    <div className="w3-animate-opacity">
      <div className="stores-cover-image">
        <div className="dandy-store mx-auto">
          <h1>Where to find us</h1>
          <p>Looking to pick up a bottle or pint?</p>
          <p>Below you will find a list of Calgary establishments carrying Dandy beers. You can check out <a href="http://www.liquorconnect.com" target="_blank" rel="noopener noreferrer">www.liquorconnect.com</a> to find all retail accounts carrying our beers across the province.</p>
        </div>
      </div>
      <div className="stores">
        <h3>Stores</h3>
        <ListGroup className="mx-auto store-list text-monospace" variant="flush">
          <ListGroup.Item>
            <div>
              <p>The Dean House</p>
              <p>National 17th Ave</p>
              <p>National 10th Ave</p>
              <p>National 8th Ave</p>
              <p>Charbar</p>
              <p>Broken City</p>
              <p>Craft Beer Market</p>
              <p>Hayden Block</p>
              <p>Bo's (Red Deer)</p>
              <p>Craft (Edmonton)</p>
              <p>The Commons (Edmonton-Rotating)</p>
              <p>Arcadia ( Edmonton-Rotating)</p>
              <p>Cilantro and Chive (Lacombe-Rotating)</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>
              <h5>NW</h5>
              <p>Kensington Wine Market</p>
              <p>Oak and Vine</p>
              <p>Brentwood Liquor Depot</p>
              <p>Vine Styles: Kensington</p>
              <p>Silver Springs Liquor</p>
              <p>Highlander Liquor North Hill</p>
              <p>Kensington Liquor Cellar</p>
              <p>Point McKay Winestore (Growler bar)</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>
              <h5>NE</h5>
              <p>Craft Cellars</p>
              <p>BK liquor Bridgeland</p>
              <p>Forest Lawn Co-op</p>
              <p>The Beer Vault</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>
              <h5>SW</h5>
              <p>Vine Arts</p>
              <p>Dominion Bottle shop</p>
              <p>5Vines</p>
              <p>Willow Park Wine and Spirits</p>
              <p>All Calgary Co-op Locations</p>
              <p>Crowfoot Wine and Spirits Altadore</p>
              <p>The Cellar Wine Store</p>
              <p>Vine Styles: Design District</p>
              <p>Highlander Liquor Seton</p>
              <p>Oak and Vine Inglewood</p>
              <p>Heritage Wine and Spirits</p>
              <p>Britannia Wine Merchants</p>
              <p>Bin 905</p>
              <p>J Webb (17th ave)</p>
              <p>J Webb (Glenmore Landing)</p>
              <p>Altadore Liquor Depot</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>
              <h5>SE</h5>
              <p>Zyn Inglewood</p>
              <p>Sundance Wine Market</p>
              <p>Oak and Vine Inglewood</p>
              <p>Cork Fine Wines</p>
              <p>J Webb (Calgary Farmer’s Markey)</p>
              <p>BK Liquor</p>
              <p>Liquor Depot Midlake</p>
              <p>The Brewer's Apprentice </p>
              <p>Restaurants/Bars with bottles:</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>
              <h5>Rodney’s Oyster Bar</h5>
              <p>Cannibale</p>
              <p>Pizza Bobs (Kensington)</p>
              <p>Shiki Menya (Bridgeland)</p>
              <p>Smuggler’s Inn</p>
              <p>Charcut Roast House</p>
              <p>Proof Cocktail Bar</p>
              <p>Bo's (Red Deer)</p>
              <p>Cilantro and Chive (Lacombe)</p>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  )
}