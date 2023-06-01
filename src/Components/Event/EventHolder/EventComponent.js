import React, { useEffect } from "react";

// import styles
import "./EventComponent.css"

// import images
import eventimg from "../../../Ressources/Images/Event/PortAg.jpg"


function EventComponent(props) {

    return(
        <div className="EventComponent animate__fadeInDown">
            <h1>{props.title}</h1>
            <img src={eventimg}></img>
            <div>
                <div>
                    <i class="fa-regular fa-calendar"></i>
                    <p>{props.date}</p>
                </div>
                <div>
                    <i class="fa-regular fa-clock"></i>
                    <p>{props.time}</p>
                </div>
            </div>
        </div>
    )
}
// EventComponent.defaultProps = {
//     image: eventimg
//   }
export default EventComponent;