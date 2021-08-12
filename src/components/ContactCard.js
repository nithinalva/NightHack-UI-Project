import React from 'react'

const ContactCard = () => {
    return (
        <div className="shadow-lg w-full  my-auto col-auto p-4">
            <div className="flex">
                <img src="/images/user1.jpg" className="h-20 rounded-full mx-1.5" alt="" />
                <h1 className="items-center my-auto ml-2">Alen Jhones</h1>
            </div>
            <div>
                <p className="text-xs mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </div>
    )
}

export default ContactCard
