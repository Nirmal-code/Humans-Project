import React from 'react';
import './contact-us.css';
import SubmissionForm from '../components/submission-form/submission-form';
import photo from '../../../static/images/contact-us-side-photo.png';

export default function Contact_Us() {
    return (
        <div id="contact-us-page">
            <h1>Temporary Header</h1>
            <SubmissionForm
                intro="Do you have a message, question, or concern? Contact us with the form below and our team will get in touch with you as soon as possible!"
                image={photo}
            />
            <footer style={{ color: "white" }}>Temporary footer</footer>
        </div>
    )
}