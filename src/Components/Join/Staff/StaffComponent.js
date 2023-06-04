import React from "react";

// Import styles
import "./styles.css";

// Import images
import miniLogo from "../../../Ressources/Images/StaffLogo/Maghreb_vACC_mini-6.png"

function StaffComponent(props) {
    
    return(
        <div className="Staff-Component">
            <img src={miniLogo}></img>
            <p>ACCMA8</p>
            <p>1467212</p>
            <p>Tech Director</p>
            <a href="mailto:ilyassbaba.me@gmail.com">Email</a>
        </div>
    )
}

export default StaffComponent;