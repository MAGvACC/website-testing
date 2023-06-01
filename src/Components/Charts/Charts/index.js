import React from "react";

// import styles
import "./styles.css"


function Rooster(){
    return(
        <div className="rooster" id="rooster">
            {/* <iframe src="https://drive.google.com/drive/folders/1-XIv8Y80zALoG6sdq6oGWE7pslkZdl3P?usp=drive_link"></iframe> */}
            {/* <a href="https://drive.google.com/drive/folders/1-XIv8Y80zALoG6sdq6oGWE7pslkZdl3P">morocco</a> */}
            <a target="blank" href="https://drive.google.com/drive/folders/1-XIv8Y80zALoG6sdq6oGWE7pslkZdl3P"><div className="Morocco"></div></a>
            <a target="blank" href="https://drive.google.com/drive/folders/1-XIv8Y80zALoG6sdq6oGWE7pslkZdl3P"><div className="Algeria"></div></a>
            <a target="blank" href="https://drive.google.com/drive/folders/1-XIv8Y80zALoG6sdq6oGWE7pslkZdl3P"><div className="Tunisia"></div></a>
        </div>
    )
}

export default Rooster;