import React from 'react';
import { useState } from 'react';
import Top from './Top';
import WorkData from './WorkData';
import ServiceData from './ServiceData';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';

function App() {
  
    return(

        <><div className='app'>
            <Top />
            <WorkData />
            <ServiceData />
            <About />
            <Contact />

        </div>
        <div className='nav'> <Navbar /> </div></>

    );

}

export default App
