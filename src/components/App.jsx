import React from 'react';
import { useState } from 'react';
import Top from './Top';
import WorkData from './WorkData';
import ServiceData from './ServiceData';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import NewNavbar from './NewNavbar';
import Designprocess from './Designprocess';

function App() {
  
    return(

        <><div className='app'>
            <Top />
            <Designprocess />
            <WorkData />
            <ServiceData />
            <About />
            <Contact />

        </div>
        <div className='nav'> 

            <Navbar /> 
            <NewNavbar />
        
        </div></>

    );

}

export default App
