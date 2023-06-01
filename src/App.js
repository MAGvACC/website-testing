// Import Libraries
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Styles
import './App.css';

// import main
import Main from './Components/Home/main';
import EventMain from './Components/Event/Event'
import ControllersMain from './Components/Controllers/Controllers'
import ChartsMain from './Components/Charts/Charts'
import ConnectVatsim from './Components/Vatsim/ConnectVatsim'

// import Annoucements from './Components/Annoucements';
// import Events from './Components/Events';





function App() {
  
  // // the code below adds a scroll event to the window of the website and check whether the user
  // // is scrolling up or down (under or above  50px ) and executes functions depending on vertical scrolling
  // window.addEventListener('scroll', (event) => {
  //   if (window.scrollY > 50) {
  //     HeaderAnimationScrollDown()
  //   } 
  //   if (window.scrollY > 300) {
  //     AboutAnimations()
  //   } 
  //   if (window.scrollY > 600) {
  //     TopControllersAnimation()
  //   } 
  //   if (window.scrollY > 1100) {
  //     EventAnnoucementsAnimations()
  //   } 
  //   else {
  //     HeaderAnimationScrollUp()
  //   }

  // });

  return (
    
    // <Router>
    //   <div className="App" >
    //   </div>    
    //   <Route path="/" component={<Main/>} /> 
    // </Router>


    <Router>
    <Routes> 
      {/* Routes */}
      <Route path="/" element={<Main />} />  
      <Route path="/Events" element={<EventMain />} />  
      <Route path="/Controllers" element={<ControllersMain />} />  
      <Route path="/Charts" element={<ChartsMain />} />  
      <Route path="/Connect" element={<ConnectVatsim />} />  
    </Routes>

    <div className="App">
        
      
    </div> 
    </Router>
        
  );
}

export default App;

