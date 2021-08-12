import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card } from './Card';
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const DemoCaursel = () => {
    // const data=[{
    //     img:"",
    //     desc:"Website Landing"
    // },{
    //     img:"",
    //     desc:"App Modern Landing"
    // }]
    return (
        <div className=" max-w-4xl mx-auto z-0 ">
            <Carousel responsive={responsive}>
              <Card img={"/images/cover4.png"} desc="Web Development"/>
              <Card img={"/images/cover5.png"} desc="Mobile Application"/>
              <Card img={"/images/cover6.png"} desc="UX/UI Designs"/>
              <Card img={"/images/cover7.png"} desc="Business Planning"/>
              <Card img={"/images/cover4.png"} desc="Portfolio Build"/>
              <Card img={"/images/cover4.png"} desc="hello"/>
            </Carousel>
           
        </div>
    )

}

export default DemoCaursel
