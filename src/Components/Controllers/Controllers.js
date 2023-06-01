import React from "react";

// import components
import Header from '../Home/Header/index';
import ControllersDiaporama from './Diaporama/index';
import Rooster from "./Rooster/index";


function ControllersMain(){
    return(
        <>
            <Header></Header>
            <ControllersDiaporama></ControllersDiaporama>
            <Rooster></Rooster>
        </>
    )
}

export default ControllersMain;