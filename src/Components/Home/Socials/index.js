import React from "react";

// import styles
import "./index.css"

// import controllers


function Socials(props){
    return(
        <div className="Socials">
            <div className="Socials-Text">
                <p className="Socials-Text-p">Follow us for news, events, and updates</p>
            </div>
            <div className="Socials-Links">
                
                <div class="SocialsListComponent-facebook">
                    <div className="icon-facebook">
                        <i class="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className="text-facebook">
                        <a href="https://www.facebook.com/MOvACC" target="blank"> Visit us on Facebook</a>
                    </div>
                </div>

                <div class="SocialsListComponent-Instagram">
                    <div className="icon-Instagram">
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                    <div className="text-Instagram">
                        <a href="https://www.instagram.com/moroccovacc/" target="blank"> Visit us on Instagram</a>
                    </div>
                </div>


                <div class="SocialsListComponent-Twitter">
                    <div className="icon-Twitter">
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                    <div className="text-Twitter">
                        <a href="https://twitter.com/MoroccoVacc" target="blank"> Visit us on Twitter</a>
                    </div>
                </div>


                <div class="SocialsListComponent-Youtube">
                    <div className="icon-Youtube">
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                    <div className="text-Youtube">
                        <a href="https://www.youtube.com/@moroccovacc" target="blank"> Visit us on Youtube</a>
                    </div>
                </div>


            
            </div>
        </div>
    )
}

export default Socials;