import React from "react";

// import styles
import "./style.css"

// import img
import logoImg from "../../../Ressources/Images/StaffLogo/Maghreb_vACC_mini-6.png"

function StaffComponent(props){
    return(
        <div className="Staff animate__fadeInRight" id={props.id}>
            
            <div className="Staff-Icon">
                <img src={logoImg}></img>
                <div>
                    <h1>{props.function}</h1>
                    <p>{props.cid}</p>
                    <a href="mailto:management@vatsim.ma">Mail</a>
                </div>
            </div>

            <div className="Staff-Text">
                <h1>{props.name}</h1>
                <p>{props.text}</p>
            </div>

        </div>
    )
}

export default StaffComponent;