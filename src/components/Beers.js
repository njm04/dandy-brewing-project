import React from 'react';
import { ListGroup } from 'react-bootstrap';

export const Beers = () => {
  return (
    <div className="dandy-beers w3-animate-opacity">
      <div className="beers-cover-image">
        <div className="dandy-line-up mx-auto">
          <h1>The Dandy Line Up</h1>
          <p>The full Dandy line up of beers. Made in small batches, available province-wide.</p>
        </div>
      </div>
      <div>
        <ListGroup className="mx-auto dandy-list text-monospace" variant="flush">
          <ListGroup.Item>
            <div>
              <h5>DANDY IN THE UNDERWORLD</h5>
              <p>5.5% ABV</p>
              <p>The main Dandy. This beer is our most popular offering and available everywhere, all the time. A light body with notes of coffee, chocolate, and light roast, this traditional Oyster Stout is sure to be a favourite.</p>
              <p>Pairs well with oysters, fish, and other salty snacks!</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>
              <h5>UNE VIEILLE MAITRESSE</h5>
              <p>4.5% ABV</p>
              <p>This farmhouse ale is available year round in the bottle and draught. A table strength beer brewed with rye and french saison yeast. It is light, refreshing, with a touch of spice and saison character. Brewed once as a limited edition, we can't seem to shake this old mistress.</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>
              <h5>THE DANDY WILD SOUR ALE</h5>
              <p>7.3% ABV</p>
              <p>A bold, malty sour ale soured with lactobacillus and fermented with a wild yeast strain. An upfront sourness is balanced with wild yeast character for a rich sour experience.</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>
              <h5>THE GOLDEN BROWN DANDY</h5>
              <p>6% ABV</p>
              <p>Our English Pale ale. This beer is a low-carbonation ode to real-ale. A smooth malt body is balanced with a highly intensive hops schedule to bring forward a great tasting beer to reward all ale lovers! Available only in bottles and casks.</p>
              <p>Pairs well with meats, rich sauces and hard, aged  cheeses</p>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="seasonal-beers-cover-image">
        <div className="dandy-line-up mx-auto">
          <h1>Seasonal Releases</h1>
          <p>Four exciting beers a year with wide release. Look for them when the weather begins to turn.</p>
        </div>
      </div>
      <div>
        <ListGroup className="mx-auto seasonal-dandy-list text-monospace" variant="flush">
          <ListGroup.Item>
            <div>
              <h5>BALTUS VAN TASSEL: CHERRY SOUR</h5>
              <p>7% ABV</p>
              <p>FALL</p>
              <p>An American Style Cherry Sour.  A rich brown American Brown sour brewed with Sweet and Tart cherries for the perfect accompaniment to shorter days and colder weather.</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>
              <h5>IN THE BLEAK MIDWINTER: BLACK IPA</h5>
              <p>6.5% ABV</p>
              <p>WINTER</p>
              <p>A fruity Black IPA. With only a kiss of roast, this black IPA is fresh and juicy but dark as the coldest days of winter. Citra and Mosaic are late hop additions to avoid the bitterness and focus on aroma.</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>
              <h5>THE JUNGLE BIRD: TROPICAL DARK SOUR</h5>
              <p>5% ABV</p>
              <p>SPRING</p>
              <p>An homage to the classic Tiki cocktail. This beer has notes of demerara sugar, bitter lime, tropical pineapple coming together for a refreshing sour that is like no other.</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>
              <h5>BRIGHT YOUNG THINGS: HOPPED WHEAT ALE</h5>
              <p>5.5% ABV</p>
              <p>SUMMER</p>
              <p>English Summer Ale. A style developed during a late 70’s heat wave in England, this beer is designed to refresh in the hot summer sun. Dry, with a touch of wheat and toasted Victory malt, it is balanced with a touch of bitterness and a sweet citrus aroma. Patios, BBQ’s, and friends all pair perfectly with this beer!</p>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  )
}