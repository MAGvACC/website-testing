import React, { useEffect, useState } from 'react';

// import styles
import './styles.css';

//Import Images
import LogoWhite from "../../../Ressources/Images/Logo/logo-white.png"
import Logo from "../../../Ressources/Images/Logo/logo.png"


function Header(){

    // Hooks
    const [LogoSrc, setLogoSrc] = useState(LogoWhite);//this hook is for change the logo from white to dark when we scroll

    // Darkmod Function
    function darkmod(){
            // Socials background color
            try{

                document.querySelector('.Socials').style.backgroundColor = "rgb(16,16,16)"
                document.querySelector('.Socials-Text-p').style.color = "rgb(159,159,159)"
                // About / Footer background color
                document.querySelector('.footer-32892').style.backgroundColor = "rgb(16,16,16)"
                document.querySelector('.footer-32892').style.color = "rgb(159,159,159)"
                // diable dark mode click
                document.querySelector('.darkmod').style.display = "none"
                document.querySelector('.whitemod').style.display = "block"

            }
            catch(err){
                console.log(err)
            }
                
    }    
    
    function whitemod(){
        try{
        // Socials background color
        document.querySelector('.Socials').style.backgroundColor = "rgb(255,255,255)"
        document.querySelector('.Socials-Text-p').style.color = "#5e5e5e"
        // About / Footer background color
        document.querySelector('.footer-32892').style.backgroundColor = "rgb(255,255,255)"
        document.querySelector('.footer-32892').style.color = "r#5e5e5e"
        // diable white mode click
        document.querySelector('.whitemod').style.display = "none"
        document.querySelector('.darkmod').style.display = "block"
        }
        catch(err){console.log(err)}
}

    let i = true;

    function PoliciesHover(){
        if (i){
            document.querySelector('.Links-Policies').style.display = "grid"
            document.querySelector('.Links-Pilots').style.display = "none"
            document.querySelector('.ColorMod').style.translate = "13vw 1vh"
            i = false
        }
        else{
            document.querySelector('.Links-Policies').style.display = "none"
            document.querySelector('.ColorMod').style.translate = "28vw 1vh"
            i = true
                }
    
    }



    let j = true;

    function PilotsHover(){
        if (j){
            document.querySelector('.Links-Pilots').style.display = "grid"
            document.querySelector('.Links-Policies').style.display = "none"
            document.querySelector('.ColorMod').style.translate = "13vw 1vh"
            j = false
        }
        else{
            document.querySelector('.Links-Pilots').style.display = "none"
            document.querySelector('.ColorMod').style.translate = "28vw 1vh"
            j = true
                }
    
    }

    return(
        
        <header className='App-header'>{/* .App-header is the top bar that contains the logo and links  */}
            <div className='Logo'>
                <img className='LogoImg' src={LogoSrc} alt="Logo"></img>
            </div>
            <div className='Links'>
                <a className='LinkA' href='/'>Home</a>{/* links are just for testing purpose after we need to create them as componenet */}
                <a className='LinkA' href='/Events'>Events</a>{/*so that it can be easy to add new links when ever when need and add the menu element  */}
                <a className='LinkA' href='/Team'>Team</a>
                <a className='LinkA' href='/Controllers'>Controllers</a>
                <a className='LinkA' onClick={()=>{PilotsHover()}} href='#'>Pilots <i class="fa-solid fa-chevron-down"></i></a>
                <a className='Link' onClick={()=>{PoliciesHover()}} href='#'>Policies <i class="fa-solid fa-chevron-down"></i></a>
            </div>
            {/* Pilots hover */}
            <div className='Links-Pilots animate__fadeIn'>
                <a className='LinkA' href='/Charts'>Charts</a>{/* links are just for testing purpose after we need to create them as componenet */}
                <a className='LinkA' href='/pilots/' target='blank'>Documentation</a>{/*so that it can be easy to add new links when ever when need and add the menu element  */}
                <a className='LinkA' href='https://vamsys.io/login' target='blank'>Virtual Royal Air Maroc</a>
                <a className='LinkA' target='blank'>Test</a>
            </div>
            {/* Policy Hover */}
            <div className='Links-Policies animate__fadeIn'>
                <a className='LinkA' target='blank' href='https://drive.google.com/file/d/1-7gKEhpeRlbF6UjUO8vg441rA9PmMKf1/view'>Vacc Policy</a>{/* links are just for testing purpose after we need to create them as componenet */}
                <a className='LinkA' target='blank' href='https://drive.google.com/file/d/1-LCD6eUOmHnEkWHDxYy4NwSPA1AVcmKE/view'>ATC Policy</a>{/*so that it can be easy to add new links when ever when need and add the menu element  */}
                <a className='LinkA' target='blank' href='https://drive.google.com/file/d/1-8FLceLLXGTDScp55pQlTxy2KQ2ox68i/view'>Membership Policy</a>
                <a className='LinkA' target='blank' href='https://drive.google.com/file/d/1-IrFCndaxz9lfCWUuggeHXTD13Glf3FK/view'>Privacy Policy</a>
            </div>

            <div className='ColorMod'>
                <a className='darkmod' href='#' onClick={()=>{darkmod()}}><i class="fa-regular fa-moon"></i> <p className='animate__fadeInLeft'>Dark Mod</p></a>
                <a className='whitemod' href='#' onClick={()=>{whitemod()}}><i class="fa-regular fa-sun"></i> <p className='animate__fadeInLeft'>White Mod</p></a>
            </div>


        </header>
    )
}

export default Header;