import React, { useEffect, useState } from "react";

// import component
import EventComponent from "./EventComponent";

function EventHolder(){
    const [RawData , setRawData] = useState() 
    function EventFetcher(){
        fetch("http://localhost:8000/GetEvent")
        .then(res => res.json())
        .then(data => setRawData(data))
        .then((data) => {
            console.log(RawData.data[0].airports[0])
        
            let i = 0
            // while (i < 205){

            //     console.log(RawData.data[i].airports[0])
            
            //     }
        })
    
        // .then(data => console.log(data.data[0].airports[0]))
    }

    useEffect(()=>{
        EventFetcher()
    },[])

    return(
        <>
            <EventComponent 
                title="Cross to Canaries"
                date="3 June 2023"
                time="11:00Z -> 18:00Z"
                image="../../../Ressources/Images/Event/PortAg.jpg"
            />
            <EventComponent 
                title="Cross to Canaries"
                date="3 June 2023"
                time="11:00Z -> 18:00Z"
                image="../../../Ressources/Images/Event/PortAg.jpg"
            />
            <EventComponent 
                title="Cross to Canaries"
                date="3 June 2023"
                time="11:00Z -> 18:00Z"
                image="../../../Ressources/Images/Event/PortAg.jpg"
            />
            <EventComponent 
                title="Cross to Canaries"
                date="3 June 2023"
                time="11:00Z -> 18:00Z"
                image="../../../Ressources/Images/Event/PortAg.jpg"
            />
            <EventComponent 
                title="Cross to Canaries"
                date="3 June 2023"
                time="11:00Z -> 18:00Z"
                image="../../../Ressources/Images/Event/PortAg.jpg"
            />
            <EventComponent 
                title="Cross to Canaries"
                date="3 June 2023"
                time="11:00Z -> 18:00Z"
                image="../../../Ressources/Images/Event/PortAg.jpg"
            />
        </>
    )
}

export default EventHolder;