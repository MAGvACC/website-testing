import React from "react";

// import Component

import Header from '../Home/Header/index';
import EventDiaporama from '../Join/Diaporama/index';
import JoinForm from './JoinForm/JoinForm'
// import Staff from "./Staff/index";

function JoinMain(){
    return(
        <>
            <Header></Header>
            <EventDiaporama></EventDiaporama>
            <JoinForm></JoinForm>
            {/* <Staff></Staff> */}
        </>
    )
}

export default JoinMain;