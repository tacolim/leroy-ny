import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '/images/FrontPage001.jpg',
    altText: 'Oatka Creek from pedestrian bridge'
    },
  {
    src: '/images/FrontPage003.jpg',
    altText: 'Woodward Memorial public library'
  },
  {
    src: '/images/FrontPage004.jpg',
    altText: 'Replica of Statue of Liberty on Oatka Creek bank'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;