import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import {AiFillFacebook,AiFillGithub} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg'
import {FaTwitter} from 'react-icons/fa'
import { BrowserRouter as Router, Link } from 'react-router-dom';
const Aboutme = () => {
    return (
       
        <>
         <Nav/>
         <div className="min-h-screen    flex-row lg:flex space-x-0 md:space-x-32">
             <div className="w-full h-100 my-auto mx-auto p-3 flex ">
            
            <div className="mx-auto items-center ml-4 rounded-full">
             <img src="/images/profile.jpg"  className="mx-auto h-60 w-64 0 rounded-full " alt="" />
            <h1 className="font-bold text-xl text-center mt-2">Nithin S K</h1>
            <p className="text-center my-2">CSE Graduate-2020</p>
            <h1 className="text-center logoC mt-4">Dayananda Sagar Academy of Technollogy and Management Bengaluru</h1>
            <div className="mt-10 flex space-x-4 ml-4 w-full">
               <Link to={{pathname:"https://github.com/nithinalva" }} target="_blank" ><AiFillFacebook className="text-center text-4xl text-blue-800"/></Link>
               <Link to={{pathname:"https://github.com/nithinalva" }} target="_blank"> <AiFillGithub className="text-center text-4xl"/></Link>
                <Link to={{pathname:"https://nithin-alva.netlify.app/"}} target="_blank"><CgProfile className="text-center text-4xl text-red-900"/></Link>
                <Link to={{pathname:"https://twitter.com/nithinalva"}} target="_blank"> <FaTwitter className="text-center text-4xl text-blue-600"/></Link>
            </div>
            </div>
             </div>
             <div className="hidden md:inline w-0.5  h-60 max-w-3xl mx-auto bg-gray-300 my-auto "/> 



    <div className="my-0 sm:my-auto ml-3.5">
   
       <h1 className="font-bold text-2xl mt-5 ">Biography</h1>
<p className="p-4">With a Bachelor’s degree in Information Science, and hands-on experiences in various languages such as HTML, CSS, Bootstrap, JavaScript, ReactJS, MongoDB.  I am confident I will be an asset to your organization. In my final semesters I did my internship at Ethnus Pvt ltd Bangalore wherein I built a telegram bot using AWS (amazon web services).

To further enhance my professional skills I have been learning  my JavaScript  through online courses and I have built many web applications using ReactJS, NodeJS frameworks. .You can check my Portfolio for the project's details, I’ll be dropping my portfolio link below.

I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me and the success of your organization. 



 About me,

 I’m a self starter and motivated team player with the ability to accomplish tasks independently. Through my work experience and other professional activities I have strengthened my interpersonal and presentation skills. I aver that with my cumulative experience which I gained from diverse sources, I’m quite able to do this job with responsibility. I would appreciate it if you give me an opportunity to discuss more about my credentials and the position.

Some of my personal qualities which you may find useful for this role are:

- Ability to learn quickly coupled with innovative ideas for problem solving

- Ability to work in a team with strong communication skills

- Hardworking and sincere towards work with an ability to take directions</p>
</div>   




         </div>
         <Footer/>
        </>
    )
}

export default Aboutme
