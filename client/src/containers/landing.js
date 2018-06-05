import React from 'react';

import Carousel from '../components/carousel';
import Youtube from '../components/youtube';
import './landing.css'

const Landing = () => (
  <div className="landing">
    <div className="head">
      <div className="headImages">
        <Carousel />
      </div>
      <div className="headTitle">
        <h2>LeRoy, NY</h2>
        <h4>14482</h4>
      </div>
    </div>
    <div className="landingContent">
      <div className="video">
        <Youtube />
      </div>
      <div className="history">
        <h5>A short history of LeRoy...</h5>
        <p>In 1812, as a result of settlers moving into the region, the New York State Legislature
          created the Town of Bellona, taken from the western section of Caledonia.
          In 1813, the State Legislature changed the name to LeRoy, after Herman LeRoy, 
          a wealthy New York City merchant, land speculator, and owner of the Triangle Tract,
          a portion of which now contains the Town.</p>
        <h5>Four New York Communities Advance in $10 Million America's Best Communities Competition</h5>
        <p>Rochester, N.Y., April 29, 2015 - Four New York communities - Including three in the greater
          Rochester and surrounding area - are celebrating their first round of success in the
          America's Best Communities competition, a $10 million initiative to stimulate economic
          revitalization in small towns and cities. Webster, LeRoy and Livingston County, plus Norwich
          in Central N.Y., are moving ahead in the competition.  Each will receive $50,000 to develop
          comprehensive strategies to accelerate the revival of their local economies and improve the
          quality of life in their communities.</p>
      </div>
    </div>
  </div>
);

export default Landing;