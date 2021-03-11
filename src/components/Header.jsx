import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Header.css";
import Modal from './Signupmodal.jsx';
import "./style.css";

class Header extends Component {
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

                <div className="header">
                    <div className="header-image">
                        <img src="../img/MyWays Logo.png"></img>
                    </div>
                    <div className="header-navlinks">

                        <div className="btnclass">

                            <div className="signup">
                                <div class="dropdown">
                                    <button class="dropbtn">ForYou
      <i class="fa fa-caret-down"></i>
                                    </button>
                                    <div class="dropdown-content">
                                        <a href="#">Find matching internship</a>
                                        <a href="#">Hire right talent</a>
                                        <a href="#">Work from home</a>
                                    </div>
                                </div>
                            </div>

                            <div className="elements">
                                InstantApply
                    </div>

                            <div className="elements">
                                Pricing
                    </div>

                            <div className="elements">
                                AboutUs
                    </div>

                            <button className="signup" onClick={this.showModal} >
                                SIGNUP
                    </button>

                            <Modal
                                show={this.state.show} handleClose={this.hideModal}>


                                <button type="button" class="close" data-dismiss="modal" onClick={this.hideModal} aria-hidden="true">X</button>
                                <div className="signUp-page">

                                    <div className="signup-heading">
                                        Sign Up
                        </div>
                                    <div className="signup-Subheading">
                                        It's quick and easy
                        </div>
                                    <div className="signup-form">
                                        <div className="signup-form-Name-f">

                                            <input type="text" id="fname"  placeholder="First Name" />
                                        </div>
                                        <div className="signup-form-Name">

                                            <input type="text" id="lname"  placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="input-extra">
                                        <div className="signup-form-extra">

                                            <input type="text" id="email"  placeholder="E-mail" />
                                        </div>
                                        <div className="signup-form-extra">

                                            <input type="text" id="password"  placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="input-group full">
                                        <button className="sbtn" onClick={this.onSignUp} >Sign Up</button>
                                    </div>

                                </div>



                            </Modal>

                            <button type="button" className=" login loginbtn" >
                                LOGIN
                            </button>


                        </div>


                    </div>

                </div>

            </main >

        );
    }

}


export default Header
