import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import About from './About';
import Demos from './Demos';
import Business from './Business';
import Clients from './Clients';
import ContactSection from './ContactSection';
import Subscribe from './Subscribe';
import Footer from './Footer';


const Caursel = () => {
    return (
        <div className="w-full h-full">
            <Carousel  autoPlay infiniteLoop={true} showStatus={false} showIndicators={false}
         showThumbs={false} interval={2000}>
                <div>
                <img src="/images/c2.png" />
                   
                </div>
                <div>
                    <img src="/images/cover.png" />
                   
                </div>
                <div>
                <img src="/images/c3.png" />
                    
                </div>
            </Carousel>
            <About/>
            <Demos/>
            <Business/>
            <Clients/>
            <ContactSection/>
            <Subscribe/>
            <Footer/>
        </div>
    )
}

export default Caursel
