import React from "react";

// import components
import Header from '../Home/Header/index';
import ChartsDiaporama from './Diaporama/index';
import Rooster from "./Charts/index";


function ChartsMain(){
    return(
        <>
            <Header></Header>
            <ChartsDiaporama></ChartsDiaporama>
            <Rooster></Rooster>
        </>
    )
}

export default ChartsMain;