import React from "react";

// import Component

import Header from '../Home/Header/index';
import EventDiaporama from '../Join/Diaporama/index';
import JoinForm from './JoinForm/JoinForm'

function JoinMain(){
    return(
        <>
            <Header></Header>
            <EventDiaporama></EventDiaporama>
            <JoinForm></JoinForm>
        </>
    )
}

export default JoinMain;