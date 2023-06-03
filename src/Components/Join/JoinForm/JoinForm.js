import React from "react";

// Import styles
import "./styles.css";

function JoinForm(props) {

    function JoinFormSliderBack(Class) {
        document.querySelector(Class).style.display="none"
        document.querySelector(".JoinForm-Question").style.display="block"
    }

    function JoinFormSlider() {
        document.querySelector(".JoinForm-Question1").style.display="block"
        document.querySelector(".JoinForm-Question").style.display="none"
    }


    function JoinFormSliderTrue() {
        document.querySelector(".JoinForm-Question-true").style.display="block"
        document.querySelector(".JoinForm-Question1").style.display="none"
    }


    function JoinFormSliderFalse() {
        document.querySelector(".JoinForm-Question-false").style.display="block"
        document.querySelector(".JoinForm-Question1").style.display="none"
    }

    
    return(
        <div className="JoinForm" id="JoinForm" >
            <div  className="JoinForm-Question animate__fadeInLeft">
                <h1>Glad that you wanna join us</h1>
                <h2>But first answer some questions</h2>
                <p onClick={()=>{JoinFormSlider()}}>Next</p>
                
            </div>
            <div id="JoinForm-noscroll" className="JoinForm-Question1 animate__fadeInRight">
                <p>Are Part of the Europe Middle East and Africa (EMEA) region?</p>
                <a href="#JoinForm-noscroll" onClick={()=>{JoinFormSliderTrue()}}>Yes</a>
                <a href="#JoinForm-noscroll" onClick={()=>{JoinFormSliderFalse()}}>No</a>
            </div>
            <div className="JoinForm-Question-true animate__fadeInRight">
                <a href="https://helpdesk.vatsim.me/open.php">Open Ticket</a>
                <p onClick={()=>{JoinFormSliderBack(".JoinForm-Question-true")}}>Back</p>
            </div>
            <div className="JoinForm-Question-false animate__fadeInRight">
                <a href="https://my.vatsim.net/user/region">Change Region</a>
                <p onClick={()=>{JoinFormSliderBack(".JoinForm-Question-false")}}>Back</p>
            </div>
        </div>
    )
}

export default JoinForm;