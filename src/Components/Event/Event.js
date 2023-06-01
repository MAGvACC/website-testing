import React from "react";

// import components
import Header from '../Home/Header/index';
import EventDiaporama from '../Event/Diaporama/index';
import EventHolder from "./EventHolder/index";

function EventMain(){
    return(
        <>
            <Header></Header>
            <EventDiaporama></EventDiaporama>
            <EventHolder></EventHolder>
        </>
    )
}

export default EventMain;