import React from 'react'
import { Card } from './Card'
import DemoCaursel from './DemoCaursel'

const Demos = () => {
    return (
        <div className="mt-36">
            <div className=" h-0.5 max-w-3xl mx-auto bg-gray-300">

            </div>
            <div className="p-4">
            <h1 className="font-extrabold text-lg mt-2">Explore our demos</h1>
          <p className="mt-2">Explore our landing Page demos on different kind of topics. More Demos are coming soon.</p>
          <div className="w-100 h-50 sm:h-80 p-4">
            <DemoCaursel/>
          </div>
            </div>
          
        </div>
    )
}

export default Demos
