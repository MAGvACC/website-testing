import React, { useState , useEffect} from "react";
import BG from './Images/Agadir.jpeg'
// import css
import "./styles.css"

function Events(props){



    const myStyle={
        // backgroundImage: "url('"+ props.background + "')",
        
    };


    return (
        <div className="Event-Container" 
        style={{ 
            // backgroundImage: `url(${props.background})`
            
          }}
        // style={myStyle}
        // onClick={handleChangeBgClick}
          >
            <div className="Event-Container-Seperation">
                <p>{props.title}</p>
                <p>{props.date}</p>
                <p>{props.time}</p>
            </div>
        </div>
    )
}

export default Events;