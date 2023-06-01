import React, { useState , useEffect} from "react";

// import css
import "./styles.css"

// import images
// import EventImage from "../../Ressources/Images/Event/PortAg.jpg"

function Events(props){

    return (
        <div className="Event">
            <div>
                <div>
                    <div>
                        <a href="#">Join the event</a>
                        <a href="http://localhost:3000/Events">Check more events</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events;