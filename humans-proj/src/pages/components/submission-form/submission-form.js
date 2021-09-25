import React, { Component } from "react";
import './submission-form.css';

class SubmissionForm extends Component {
    constructor(props) {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            descripton: "",
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

    render() {
        return (
            <div id="submission">
                <p id="intro">{this.props.intro}</p>

                <form id="text-fields">
                    <label>First Name</label>
                    <br style={{ lineHeight: "1" }} />
                    <input
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                    <br style={{ lineHeight: "4" }} />

                    <label>Last Name</label>
                    <br style={{ lineHeight: "2" }} />
                    <input
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                    <br style={{ lineHeight: "4" }} />

                    <label>Email</label>
                    <br style={{ lineHeight: "2" }} />
                    <input
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <br style={{ lineHeight: "4" }} />

                    <label>Description</label>
                    <br style={{ lineHeight: "2" }} />
                    <input
                        name="description"
                        value={this.state.descripton}
                        onChange={this.handleChange}
                        style={this.descriptionStyle}
                    />
                    <br style={{ lineHeight: "4" }} />

                    <div style={{textAlign:"left"}}>
                        <input
                            type="checkbox"
                            id="can-contact-checkbox"
                            name="canContact"
                            onChange={this.handleChange}
                            checked={this.state.canContact}
                        /> 
                        <label style={{marginLeft:"-25.3vw"}}>I understand that this form is storing my submitted information so I can be contacted.</label>
                    </div>


                    <br style={{ lineHeight: "3" }} />
                    <button>SUBMIT</button>
                </form>
            </div>
        )
    }
}

export default SubmissionForm;