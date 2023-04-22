import React from "react";

// Import StyleSheet 

import "./styles.css";


function Annoucements(props){
    return (
        <div className="Annoucement-Container">
            <div className="Annoucement-Container-Seperation">
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Annoucements;