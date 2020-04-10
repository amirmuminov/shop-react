import React from 'react';
import './contact.css';
import Header from "../../components/header";
import Footer from "../../components/footer";
import ContactForm from "../../components/contact-form";

function Contact() {
    return (
        <div>
            <Header/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}

export default Contact;
