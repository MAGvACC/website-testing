import React from "react";



// Import Components
import Header from './Header/index';
import Diaporama from "./Diaporama/index"
import Socials from './Socials/index';
import Event from './Events/index';
import Warning from './Warning/index';
import Footer from './Footer/index';



function Main (props) {
    return(
        <>
            <Header></Header>
            <Diaporama></Diaporama>
            <Socials></Socials>
            <Event></Event>
            <Warning></Warning>
            <Footer></Footer>
        </>
    )
}

export default Main;