import React from "react";

// import styles
import "./ConnectVatsim.css";
import Logo from "../../Ressources/Images/Logo/logo.png"

function ConnectVatsim(){
    return(
        <div className="ConnectVatsim animate__fadeIn">
            
            <div className="ConnectVatsimImg">
            <div className="ConnectVatsimForm animate__fadeIn">
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
            </div>
        </div>
    )
}

export default ConnectVatsim;