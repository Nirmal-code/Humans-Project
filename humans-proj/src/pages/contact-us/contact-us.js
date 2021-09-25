import React from 'react';
import './contact-us.css';
import SubmissionForm from '../components/submission-form/submission-form';

function Contact() {
    return (
        <div>
            <h1>Temporary Header</h1>
            <SubmissionForm
                intro="Do you have a message, question, or concern? Contact us with the form below and our team will get in touch with you as soon as possible!"
            />
            <footer style={{ color: "white" }}>Temporary footer</footer>
        </div>
    )
}

export default Contact;