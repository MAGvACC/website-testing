import React from "react";

// Import styles
import "./styles.css";

// import Components
import StaffComponent from "./StaffComponent"


function Staff(props) {
    
    return(
        <div className="Staff">
            <div className="Staff-Selector">
                <div className="Staff-Selector-Container">
                    <p>All</p>
                </div>
                <div className="Staff-Selector-Container">
                    <p>CASABLANCA FIR</p>
                </div>
                <div className="Staff-Selector-Container">
                    <p>Alger FIR</p>
                </div>
                <div className="Staff-Selector-Container">
                    <p>Tunis FIR</p>
                </div>
            </div>
            <div className="Staff-Container">
                <StaffComponent></StaffComponent>
                <StaffComponent></StaffComponent>
                <StaffComponent></StaffComponent>
                <StaffComponent></StaffComponent>
                <StaffComponent></StaffComponent>
                <StaffComponent></StaffComponent>
            </div>
        </div>
    )
}

export default Staff;