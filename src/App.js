import React, { useEffect, useState } from 'react';
import './App.css';
import Logo from "./Ressources/Images/Logo/logo.png"
import LogoWhite from "./Ressources/Images/Logo/logo-white.png"


// Import Components
import Annoucements from './Components/Annoucements';
import Events from './Components/Events';

function App() {
  // Hooks
  const [LogoSrc, setLogoSrc] = useState(LogoWhite);//this hook is for change the logo from white to dark when we scroll


  // the function below controls every animation and changes that are needed when you scroll down
  function HeaderAnimationScrollDown() {
    document.getElementsByClassName("App-header")[0].style.backgroundColor = "white"
    document.getElementsByClassName("App-header")[0].style.translate = "0 -0vh"
    document.getElementsByClassName("App-header")[0].style.position = "fixed"
    document.getElementsByClassName("App-header")[0].style.width = "100vw"
    document.getElementsByClassName("App-header")[0].style.paddingTop = "1vh"
    document.getElementsByClassName("App-header")[0].style.paddingTop = "1vh"
    document.getElementsByClassName("App-header")[0].style.boxShadow = "0px 15px 100px rgb(78, 78, 78)"
    document.getElementsByClassName("LinkA")[0].style.color = "black"
    document.getElementsByClassName("LinkA")[1].style.color = "black"
    document.getElementsByClassName("LinkA")[2].style.color = "black"
    document.getElementsByClassName("LinkA")[3].style.color = "black"
    setLogoSrc(Logo)
  }

  // the function below controls every animation and changes that are needed when you scroll up
  function HeaderAnimationScrollUp() {
    document.getElementsByClassName("App-header")[0].style.backgroundColor = "transparent"
    document.getElementsByClassName("App-header")[0].style.position = "absolute"
    document.getElementsByClassName("App-header")[0].style.translate = "0vw 5vh"
    document.getElementsByClassName("App-header")[0].style.width = "100vw"
    document.getElementsByClassName("App-header")[0].style.boxShadow = "0px 0px 0px rgb(10, 10, 10)"
    document.getElementsByClassName("LinkA")[0].style.color ="aliceblue"
    document.getElementsByClassName("LinkA")[1].style.color ="aliceblue"
    document.getElementsByClassName("LinkA")[2].style.color ="aliceblue"
    document.getElementsByClassName("LinkA")[3].style.color ="aliceblue"
    setLogoSrc(LogoWhite)
    // document.getElementsByClassName("about")[0].style.boxShadow = "0 0 0 grey"
  }

  // The function below controls the .about animation effect
  function AboutAnimations(){
    document.querySelector(".about-logo").style.display = "inline"
    document.querySelector(".about-logo").classList.add("animate__fadeInLeft")

    document.querySelector(".about-text").style.display = "inline"
    document.querySelector(".about-text").classList.add("animate__fadeInRight")
  }

  
  // The function below controls the .top-controllers animation effect
  function TopControllersAnimation(){
    document.getElementsByClassName("Top-Controllers")[0].style.display="block"
    setTimeout(()=>{
      document.getElementsByClassName("Top-Controllers-Seperation")[0].style.backdropFilter  = "contrast(100%) saturate(100%) blur(5px) brightness(100%)"
      document.getElementsByClassName("New-Controllers")[0].style.display="block"
      document.getElementsByClassName("Top-Controllers-Content")[0].style.display="block"
      document.getElementsByClassName("Top-Positions")[0].style.display="block"
    },2000)
  }

    // The function below controls the .Annoucements .Events animation effect
    function EventAnnoucementsAnimations(){
      document.getElementsByClassName("Annoucements")[0].style.display = "inline"
      document.getElementsByClassName("Annoucements")[0].classList.add("animate__fadeInLeft")
      
      document.getElementsByClassName("Events")[0].style.display = "inline"
      document.getElementsByClassName("Events")[0].classList.add("animate__fadeInRight")
    }

  // the code below adds a scroll event to the window of the website and check whether the user
  // is scrolling up or down (under or above  50px ) and executes functions depending on vertical scrolling
  window.addEventListener('scroll', (event) => {
    if (window.scrollY > 50) {
      HeaderAnimationScrollDown()
    } 
    if (window.scrollY > 300) {
      AboutAnimations()
    } 
    if (window.scrollY > 600) {
      TopControllersAnimation()
    } 
    if (window.scrollY > 1100) {
      EventAnnoucementsAnimations()
    } 
    else {
      HeaderAnimationScrollUp()
    }

  });

  // The function below adds blur and animation to the elements of the .landing-div and sets animation depending on time 
  function LandingBlur(){
    document.getElementsByClassName("Background-seperation")[0].style.backdropFilter  = "contrast(120%) saturate(120%) blur(5px) brightness(100%)"
    
    document.getElementsByClassName("content-p1")[0].style.display= "inline";
    document.getElementsByClassName("content-p1")[0].classList.add("animate__fadeIn")

    document.getElementsByClassName("content-p2")[0].style.display= "block";
    document.getElementsByClassName("content-p2")[0].classList.add("animate__fadeIn")

    setTimeout(() => {
      document.getElementsByClassName("content-a1")[0].style.display= "inline";
      document.getElementsByClassName("content-a1")[0].classList.add("animate__fadeIn")

      document.getElementsByClassName("content-a2")[0].style.display= "inline";
      document.getElementsByClassName("content-a2")[0].classList.add("animate__fadeIn")
  
    }, 1000);

    setTimeout(() => {
      document.getElementsByClassName("Event-Content")[0].style.display= "block";
      document.getElementsByClassName("Event-Content")[0].classList.add("animate__fadeInRight")
  
    }, 1500);
    }

  // The function below removes blur and changes the opacity of the .Background-seperation element
  function LandingDivClickDown(){
    document.getElementsByClassName("Background-seperation")[0].style.backdropFilter  = "contrast(100%) saturate(100%) blur(0px) brightness(100%)"
    document.getElementsByClassName("Background-seperation")[0].style.opacity ="10%" 
    document.getElementsByClassName("App-header")[0].style.opacity ="10%"
    
  }

  // The function below resets blur and the opacity of the .Background-seperation element
  function LandingDivClickUp(){
    document.getElementsByClassName("Background-seperation")[0].style.backdropFilter  = "contrast(120%) saturate(120%) blur(5px) brightness(100%)"
    document.getElementsByClassName("Background-seperation")[0].style.opacity ="100%"
    document.getElementsByClassName("App-header")[0].style.opacity ="100%"
    
  }

  



  return (
    <div className="App" onLoad={()=>{setTimeout(() => {LandingBlur()}, 1500);}}>
      {/* .LandingDiv is an element designed to set the background "animations"  */}
      <div className='Landing-Div' onMouseUp={() => {LandingDivClickUp()}} onMouseDown={()=>{LandingDivClickDown()}}>
        
        {/* .App-header is the top bar that contains the logo and links  */}
        <header className='App-header'>
            <div className='Logo'>
              <img className='LogoImg' src={LogoSrc} alt="Logo"></img>
            </div>
            <div className='Links'>
              <a className='LinkA' href='#'>Home</a>{/* links are just for testing purpose after we need to create them as componenet */}
              <a className='LinkA' href='#'>Events</a>{/*so that it can be easy to add new links when ever when need and add the menu element  */}
              <a className='LinkA' href='#'>Training</a>
              <a className='LinkA' href='#'></a>
            </div>
          </header>
        {/* .Background-seperation is and a layer that seperation the .Landing-div from the .content elements so i can add blur and some cool stuff */}
        <div className='Background-seperation'>
          {/* .content has ... just read the code below is self-explanatory */}
          <div className='content'>
            <p className='content-p1'>Welcome to Maghreb,</p>
            <p className='content-p2'>Here you can train and be a better ATC, in the hand of experienced Controllers</p>
            <a href='#' className='content-a1'>Training</a>
            <a href='#' className='content-a2'>About Us</a>
          </div>
          {/* same as .content other than the <i></i> is an icon that I got from FontAwesome (website) */}
          <div className='Event-Content'>
            <p className='Event-Content-p'>Event</p>
            <p className='Event-Content-title'>MVT (4th leg) - GMAD to GMMX </p>
            <p className='Event-Content-link'><i class="fa-solid fa-arrow-right"></i></p>
          </div>
        </div>
      </div>

      <div className='white'>

        <div className='about'>
          <div className='about-logo'>
            <img src={Logo}></img>
          </div>
          <div className='about-text'>
            <h2>Part of VATMENA & the VATSIM Network.</h2>
            <p>Welcome to the virtual Maghreb ATC!</p>
            <p>Encompassing an airspace of approximately 280,000 square miles in parts of Morocco, Algeria, Tunusia. Maghreb Vacc has a diverse selection of destinations for you to choose from along with the professional air traffic control services to support your flight.</p>
          </div>
        </div>
      </div>


      <div className='Top-Controllers animate__fadeIn'>
        <div className='Top-Controllers-Seperation'>
          <div className='New-Controllers animate__fadeInLeft'></div>
          <div className='Top-Controllers-Content animate__fadeIn'></div>
          <div className='Top-Positions animate__fadeInRight'></div>
        </div>
      </div>


        <div className='Annoucements animate__fadeInLeft'>
          <h1>Annoucements</h1>
          <p>Whats new?</p>
          {/* component */}
          <Annoucements
            text = "I am thrilled to announce that @Ali B. - ACCMA3 has been appointed as the new ATC Training Director (ACCMA3)."
          />
          <Annoucements
            text = "Morocco vACC is excited to announce the collaboration with ABY virtual (https://abyvirtual.com/), a raising virtual airline based in the United Arab Emirates with subsidiaires in the UAE, Egypt, Sudan, Morocco, Armenia and Pakistan."
          />
        </div>

        <div className='Events animate__fadeInRight'>
          <h1>Events</h1>
          <p>Meet new people over radio</p>
          {/* component */}
          <Events 
            background = "Images/Agadir.jpeg"
            title = "MVT (4th leg) - GMAD to GMMX"
            date = "APR 25th 2023"
            time = "1730z - 19:30z"
          />
          <Events 
            background = "Images/Agadir.jpeg"
            title = "MVT (4th leg) - GMAD to GMMX"
            date = "APR 25th 2023"
            time = "1730z - 19:30z"
          />

        </div>
    </div>
  );
}

export default App;
