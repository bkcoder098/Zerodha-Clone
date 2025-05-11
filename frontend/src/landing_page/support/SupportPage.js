import React from 'react';
import Hero from "./Hero";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CreateTicket from "./CreateTicket";

function SupportPage() {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <CreateTicket/>
        
        <Footer/>
        
        </>
     );
}

export default SupportPage;