import React from 'react'
import {AiFillFacebook} from 'react-icons/ai'
import {FiTwitter,FiInstagram} from 'react-icons/fi'
const Footer = () => {
    return (
        <>
            <div className=" h-0.5 w-full mx-auto bg-gray-300 my-3"  />
            
            <div className="flex justify-between content-between">
                <div className="my-auto mb-4">
                    <img src="/images/logo.png" alt="" className="w-30" />
                 </div>
              
                  
                <div className="mx-auto flex space-x-6 my-auto">
                <span className="text-lg sm:text-3xl logoC"><AiFillFacebook/></span>
                <span className="text-lg sm:text-3xl logoC"><FiTwitter/></span>
                <span className="text-lg sm:text-3xl logoC"><FiInstagram/></span>
                </div>
                <div className="mr-2 my-auto">
                 <h1 className="text-xs sm:text-lg">Copyrights 2020 soprono</h1>
             </div>
             </div>

           
            
        </>
    )
}

export default Footer
