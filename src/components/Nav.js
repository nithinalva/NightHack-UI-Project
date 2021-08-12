import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Nav = () => {
    
const[navbar,setnavbar]=useState(false)
    return (
       <>
       <Router>
       <div className="bg-white shadow-lg  p-2  mr-2 flex sticky top-0 z-50 w-full  ">

        <div className="">
            <img src='/images/logo.png' className="object-contain w-full h-12" alt="" />
          </div>

          <div className="hidden sm:flex items-center ml-auto space-x-10">
              <div onClick={(e) => {
      e.preventDefault();
      window.location.href="/"}}>
                  <h1 className="font-bold text-gray-600  no-underline hover:underline  cursor-pointer ">Home</h1>
              </div>
              <div>
                  <h1 className="font-bold text-gray-600 hover:underline  cursor-pointer">Products</h1>
              </div>
              <div  onClick={(e) => {
      e.preventDefault();
      window.location.href="aboutme"}}>
                  <h1 className="font-bold text-gray-600 hover:underline  cursor-pointer"  >About me</h1>
              </div>
              <div>
                  <h1 className="font-bold text-gray-600 hover:underline  cursor-pointer">Demos</h1>
              </div>

              <div>
                  <h1 className="font-bold text-gray-600 hover:underline  cursor-pointer">Contact Us</h1>
              </div>
             
          </div>

{navbar &&
          <div className=" ease-out flex flex-col sm:hidden   space-y-7 mt-10 p-2 w-full ">
              <div onClick={(e) => {
      e.preventDefault();
      window.location.href="/"}}>
                  <h1 className="mx-auto font-bold text-gray-600  no-underline hover:underline  cursor-pointer ">Home</h1>
              </div>
              <div>
                  <h1 className="font-bold text-gray-600 hover:underline  cursor-pointer">Products</h1>
              </div>
              <div onClick={(e) => {
      e.preventDefault();
      window.location.href="aboutme"}}>
                  <h1 className="font-bold text-gray-600 hover:underline  cursor-pointer"><Link to="/aboutme">About me</Link></h1>
              </div>
              <div>
                  <h1 className="font-bold text-gray-600 hover:underline  cursor-pointer">Demos</h1>
              </div>

              <div>
                  <h1 className="font-bold text-gray-600 hover:underline  cursor-pointer">Contact Us</h1>
              </div>
             
          </div>
}

          <div className="inline sm:hidden ml-auto h-10 p-4  cursor-pointer " onClick={()=>setnavbar(!navbar)}>
                  <span><GiHamburgerMenu /></span>
              </div>
        
        </div>
        </Router>
       </>
    )
}

export default Nav
