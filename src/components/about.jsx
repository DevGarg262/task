import React, { Component } from "react";
import "./about.css";
import Modal from './Signupmodal.jsx';
import "./style.css";

class About extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <main>

                <div>
                    <div className="heading">
                        Apply and hear back every time
            </div>
                    <div className="txt">
                        Exploring internships or jobs? Say good-bye to the typical
                        job portals and use the power of Artificial Intelligence t
                        o become successful, faster.
        </div>

                    <button className="btn" onClick={this.showModal}><text className="btn-text">Get Started</text></button>

                    <Modal show={this.state.show} handleClose={this.hideModal}>

                        <button type="button" class="close" data-dismiss="modal" onClick={this.hideModal} aria-hidden="true">X</button>
                        <div className="signUp-page-abc">
                            <div className="signup-heading">
                                Sign Up
       </div>
                            <div className="signup-Subheading">
                                It's quick and easy
       </div>
                            <div className="signup-form">
                                <div className="signup-form-Name-f">
                                   
                                    <input type="text" id="fname" placeholder="First Name" />
                                </div>
                                <div className="signup-form-Name">
                                    
                                    <input type="text" id="lname" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="input-extra">
                                <div className="signup-form-extra">
                                   
                                    <input type="text" id="email" placeholder="E-mail" />
                                </div>
                                <div className="signup-form-extra">
                                    
                                    <input type="text" id="password" placeholder="Password" />
                                </div>
                            </div>
                            <div className="input-group full">
                                <button className="sbtn" >Sign Up</button>
                            </div>

                        </div>

                    </Modal>

                </div>
            </main>
        );
    }
}

export default About
