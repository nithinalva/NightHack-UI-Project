import React from 'react'
import {FaGlobeAmericas} from 'react-icons/fa'

const Business = () => {
    return (
        <div>
             <div className="my-8 h-0.5 max-w-3xl mx-auto bg-gray-300"/>
                
             <h1 className="font-semibold text-2xl">Start your business journey with Soprano</h1>
             <p className="mt-4 ">Try Shopify for free, and explore all the tools and services you need to start, run, and grow your business.</p>
             <img src="/images/group.png" alt="" className="items-center mx-auto mt-6"/>
             <button className=" color text-white my-12 font-regular sm:font-bold text-xs sm:text-sm max-w-xs sm:w-1/6 p-3 sm:p-4 rounded-2xl hover:bg-purple-800"> Start Free Trial</button>
             <div className="my-8 h-0.5 max-w-3xl mx-auto bg-gray-300"/>
        </div>
    )
}

export default Business
