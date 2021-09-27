import React, { Component } from "react";
import './submission-form.css';

export default class SubmissionForm extends Component {
    constructor(props) {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            description: "",
            canContact: false
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
            :
            this.setState({
                [name]: value
            })
    }

    dontEnter(e) { e.preventDefault(); }

    render() {
        return (
            <div id="submission">
                <p id="intro">{this.props.intro}</p>

                <form id="text-fields" onSubmit={this.dontEnter}>

                    <div id="spinner" style={{ float: "right" }}>
                        <img
                            id="picture"
                            src={this.props.image}
                            alt="women-diversity"
                        />
                        <div id="caption-border">
                            <figcaption id="caption">humans.</figcaption>
                        </div>
                    </div>

                    <label>First Name</label>
                    <br style={{ lineHeight: "2" }} />
                    <textarea
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                    <br style={{ lineHeight: "2" }} />

                    <label>Last Name</label>
                    <br style={{ lineHeight: "2" }} />
                    <textarea
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                    <br style={{ lineHeight: "2" }} />

                    <label>Email</label>
                    <br style={{ lineHeight: "2" }} />
                    <textarea
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <br style={{ lineHeight: "2" }} />

                    <label>Description</label>
                    <br style={{ lineHeight: "2" }} />
                    <textarea
                        id="description-text-input"
                        name="description"
                        value={this.state.descripton}
                        onChange={this.handleChange}
                    />
                    <br style={{ lineHeight: "2" }} />

                    <li style={{ listStyleType: "none" }}>
                        <input
                            type="checkbox"
                            id="can-contact-checkbox"
                            name="canContact"
                            onChange={this.handleChange}
                            checked={this.state.canContact}
                        />
                        <label id="consent" for="can-contact-checkbox">I understand that this form is storing my submitted information so I can be contacted.</label>
                    </li>

                    <br style={{ lineHeight: "2" }} />
                    <button>SUBMIT</button>
                </form>
            </div>
        )
    }
}