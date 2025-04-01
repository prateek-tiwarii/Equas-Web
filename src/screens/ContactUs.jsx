import React, { useEffect } from 'react'
import ContactForm from '../components/contactForm'
import SupportSection from '../components/Help'

const ContactUs = () => {
    useEffect(() => {
        const gradientBg = document.querySelector('.gradient-background');
        if (gradientBg) {
            gradientBg.classList.remove('not-home');
        }

        return () => {

            if (gradientBg) {
                gradientBg.classList.add('not-home');
            }
        };
    }, []);

    return (
        <div>
            <ContactForm />
            <div className="other-content">
                <SupportSection />
            </div>
        </div>
    )
}

export default ContactUs