import React from "react";

// import styles
import "./index.css";

// import footer styles
import "./style.css"
import "./bootstrap.min.css"
import "./bootstrap/bootstrap-reboot.css"
import "./bootstrap/bootstrap-grid.css"

// import images
import maghrebLogo from "../../../Ressources/Images/Logo/logo.png"
import vABYLogo from "../../../Ressources/Images/Logo/vABY_Logo_Red_1670w.png"
import VramLogo from "../../../Ressources/Images/Logo/vRAM-3-1536x1536.png"

function Footer(props) {
    return (
        <>
        <footer id="footer" class="footer-32892 pb-0">
            <div class="site-section">
            <div class="container">
    
                
                <div class="row">
    
                <div class="col-md pr-md-5 mb-4 mb-md-0">
                    <h3>About Us</h3>
                    {/* <p class="mb-4">We are the Virtual Area Control Centre proudly serving Maghreb on the VATSIM Network. A network for enthusiasts of virtual flight simulation, VATSIM links virtual pilots and air traffic controllers. Maghreb vACC is part of the VATSIM Middle East and North Africa Divison which provides training to its members so that pilots receive world-class service. Join us now to become a virtual air traffic controller!</p> */}
                    <p className="mb-4">
                    VATSIM is a global community of aviation enthusiasts who come together to simulate real-world air traffic control and pilot operations. With a network of over 80,000 members, VATSIM offers a truly immersive and realistic virtual aviation experience.
                    </p>
                    <p className="mb-4">
                    Maghreb vACC is a proud member of the VATSIM Middle East and North Africa Division, which provides a wealth of resources and support to its members. From training programs to community events, the division is dedicated to helping virtual pilots and controllers hone their skills and connect with like-minded aviation enthusiasts.
                    </p>
                    <p className="mb-4">
                    As a virtual air traffic controller with Maghreb vACC, you'll have the opportunity to work with a diverse range of virtual pilots and aircraft, from small prop planes to jumbo jets. Whether you're managing arrivals and departures at a busy international airport or guiding a single aircraft through remote airspace, every session is a unique and challenging experience.
                    </p>
                    <p className="mb-4">
                    Joining Maghreb vACC as a virtual air traffic controller is a great way to develop valuable real-world skills in communication, teamwork, problem-solving, and decision-making. By working with experienced mentors and fellow enthusiasts, you'll gain the knowledge and confidence to handle even the most complex air traffic scenarios.
                    </p>
                </div>
  
  
              <div class="col-md-3 mb-4 mb-md-0">
                <h3>Proudly partnering with</h3>
                <div class="row gallery">
                   <div class="col-6">
                  </div>
                  <div class="col-6">
                  </div>
                  <div>
                    <img 
                      style={{width:'10vw'}} 
                      src={vABYLogo}
                      />
                    <img 
                        style={{width:'10vw'}} 
                        src={VramLogo}
                        />
                  </div>
                </div>
              </div>
              
              <div class="col-12">
                <div class="py-5 footer-menu-wrap d-md-flex align-items-center">
                  <ul class="list-unstyled footer-menu mr-auto">
                    <li><a href="https://vatsim.net/">Vatsim</a></li>
                    <li><a href="https://vatsim.me/">Vatmena</a></li>
                    <li><a href="/Charts">Charts</a></li>
                    <li><a href="#">Contact us</a></li>
                  </ul>

                  <div className="Footer-Email-Link"><a href="mailto:">management@vatsim.ma</a></div>
                  
                  <div class="site-logo-wrap ml-auto">
                    <a href="#" class="site-logo">
                    Copyright © 2023 Maghreb vACC
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </footer>
        </>
    )
}

export default Footer;