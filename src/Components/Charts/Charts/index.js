import React from "react";

// import styles
import "./styles.css"


function Rooster(){
    return(
        <div className="rooster" id="rooster">
            {/* <iframe src="https://drive.google.com/drive/folders/1-XIv8Y80zALoG6sdq6oGWE7pslkZdl3P?usp=drive_link"></iframe> */}
            {/* <a href="https://drive.google.com/drive/folders/1-XIv8Y80zALoG6sdq6oGWE7pslkZdl3P">morocco</a> */}
           
                <div className="Morocco" 
                onMouseOver={()=>{document.querySelector(".Morocco div div").style.display="block"}}
                onMouseOut={()=>{document.querySelector(".Morocco div div").style.display="none"}}
                >
                    <div>
                        <div className="animate__fadeInDown">
                            <a target="blank" href="https://drive.google.com/drive/folders/1Rgb9Y8wad3s9LXL_iRosA2h3N5lgM9aB?usp=drive_link">IFR</a>
                            <a target="blank" href="https://siamaroc.onda.ma/cartes_vfr.htm">VFR</a>
                        </div>
                    </div>
                </div>
            
                <div className="Algeria"
                onMouseOver={()=>{document.querySelector(".Algeria div div").style.display="block"}}
                onMouseOut={()=>{document.querySelector(".Algeria div div").style.display="none"}}
                >
                    <div>
                        <div className="animate__fadeInDown">
                            <a target="blank" href="https://drive.google.com/drive/folders/196Rx-yNIcd4UzSUQjmGP-NX8IjDUyFoR?usp=drive_link">IFR</a>
                            <a target="blank" href="https://www.sia-enna.dz/">VFR</a>
                        </div>
                    </div>
                </div>

                <div className="Tunisia"
                onMouseOver={()=>{document.querySelector(".Tunisia div div").style.display="block"}}
                onMouseOut={()=>{document.querySelector(".Tunisia div div").style.display="none"}}
                >
                    <div>
                        <div className="animate__fadeInDown">
                            <a target="blank" href="https://drive.google.com/drive/folders/1uN95_ZlMWBM5EuYXFOzwYsUzpCaGrUjH?usp=drive_link">IFR</a>
                            <a target="blank" href="http://www.oaca.nat.tn/index.php?id=695">VFR</a>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Rooster;