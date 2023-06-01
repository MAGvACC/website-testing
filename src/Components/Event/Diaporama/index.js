import React, { useEffect } from "react";



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


function EventDiaporama(){

    

    useEffect(() => {
        setTimeout(() => {
        LandingBlur(); 
        }, 500); 
    }, []);


    
    return(

        <div className='Landing-Div'onMouseUp={()=>{LandingDivClickUp()}} onMouseDown={()=>{LandingDivClickDown()}} >
            {/* .Background-seperation is and a layer that seperation the .Landing-div from the .content elements so i can add blur and some cool stuff */}
            <div className='Background-seperation'>
            {/* .content has ... just read the code below is self-explanatory */}
            <div className='content'>
                <p className='content-p1'>Welcome to Events page,</p>
                <div className="content-div1">
                <p className='content-p2'>Here you can join events to learn flying in busy airspaces, enjoy your time</p>
                </div>
                <div className="content-a">
                    <a href='#' className='content-a1'>Check Events</a>
                    <a href='#footer' className='content-a2'></a>
                </div>
            </div>
            </div>
        </div>

    )
    
}

export default EventDiaporama;