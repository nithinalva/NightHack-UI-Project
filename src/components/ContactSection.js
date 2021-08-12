import React from 'react'
import ContactCard from './ContactCard'

const ContactSection = () => {
    return (
        <div className="col sm:flex max-w-3xl mx-auto space-x-0 sm:space-x-8 p-4">
           <ContactCard/>
           <ContactCard/>
        </div>
    )
}

export default ContactSection
