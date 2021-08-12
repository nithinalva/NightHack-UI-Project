import React from 'react'

const Subscribe = () => {
    return (
        <div className="w-full h-32 color mb-2 flex p-4 space-x-4 sm:space-x-80  ">
            
            <div className="items-start ml-2 sm:ml-3.5  ">
                <h1 className="text-white font-bold text-left text-xs sm:text-lg">Subscribe our newsletter</h1>
                <p className="hidden  sm:flex text-xs sm:text-lg w-full text-left  text-white font-normal mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore</p>
                
            </div>
            <div className="my-auto items-start space-x-2 ">
              
                <input id="subscribe" type="text" tabindex="2" minlength="5" placeholder="Email Address" className="font-white py-2" required/>
                <button className="text-black bg-white text-sm rounded-xl w-35 px-2">Get Access</button>
            </div>
            
        </div>
    )
}

export default Subscribe
