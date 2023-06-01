import React from "react";

// import styles
import "./ConnectVatsim.css";
import Logo from "../../Ressources/Images/Logo/logo.png"

function ConnectVatsim(){
    return(
        <div className="ConnectVatsim animate__fadeIn">
            <div className="ConnectVatsimForm animate__fadeInLeft">
                <form>
                    <img src={Logo}></img>
                    <h1></h1>
                    <p>CID</p>
                    <input type="text" placeholder=" CID" />
                    <p>Password</p>
                    <input type="password" placeholder=" Password" />
                    <input className="ConnectVatsimSubmit" type="submit" />
                </form>
            </div>
            <div className="ConnectVatsimImg">
                
            </div>
        </div>
    )
}

export default ConnectVatsim;