import React from 'react';
import Navbar from "../landing_page/Navbar";
import Footer from "../landing_page/Footer";

function NotFound() {
    return ( 
        <>
         <Navbar/>
        <div className="container text-center">
           
            <div className="row">
            <h1 className="mt-5">404 Page Not Found </h1>
            <p>Sorry, The page you are looking for does not exist.</p>
            </div>
            
        </div>
        <Footer/>
        </>
        
     );
}

export default NotFound;