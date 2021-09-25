import React from 'react';
import './nominate.css';
import SubmissionForm from '../components/submission-form/submission-form';

function Nominate() {
    return (
        <div>
            <h1>Temporary Header</h1>
            <SubmissionForm
                intro="Would you like to recommend yourself or someone you know to be featured on our website? Enter your name and information below, as well as a short description of the person or group you are recommending."
                image="../../../static/images/nominate-side-photo.jpg"
            />
            <footer style={{ color: "white" }}>Temporary footer</footer>
        </div>
    )
}

export default Nominate;