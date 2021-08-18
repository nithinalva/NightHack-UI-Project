import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const DynamanicCarousel = ({data}) => {
 
        return <Carousel autoPlay infiniteLoop='true'>
        {
          data.Data.map( image => {
            return <div>
              <img src={ image.url } />     
              <p className="legend">{ image.title}</p>
              <p>{image.desc}</p>
            </div>
          })
        }
      </Carousel>


}

export default DynamanicCarousel

