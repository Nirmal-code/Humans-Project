import React from 'react';
import './nominate.css';
import SubmissionForm from '../components/submission-form/submission-form';
import photo from '../../../static/images/nominate-side-photo.jpg';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Nominate() {
    return (
        <div id="nominate-page">
            <Header />
            <SubmissionForm
                intro="Would you like to recommend yourself or someone you know to be featured on our website? Enter your name and information below, as well as a short description of the person or group you are recommending."
                image={photo}
            />
            <Footer />
        </div>
    )
}