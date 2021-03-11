import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./modal2.css";

function App() {
    const [alert, setAlert] = useState("");
    const [displayModal, setDisplayModal] = useState(false);


    return (
        <div className="App">
            <div className={`Modal ${displayModal ? "Show" : ""}`}>
                <h3>Login</h3>
                <button
                    className="Close"
                    onClick={() => setDisplayModal(!displayModal)}
                >
                    X
        </button>
                <div className="box">

                    <input type="text" className="fields" id="email" placeholder="E-mail" />
                    <input type="text" className="fields" id="password" placeholder="Password" />

                    <div className="input-group full">
                        <button className="sbtnn"  >Login</button>
                    </div>
                </div>

            </div>
            <div
                className={`Overlay ${displayModal ? "Show" : ""}`}
                onClick={() => setDisplayModal(!displayModal)}
            />
            <p className="Alert">{alert}</p>
        </div>
    );
}