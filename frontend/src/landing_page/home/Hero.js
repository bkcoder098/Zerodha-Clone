import React from 'react'

function 
Hero() {
    return ( 
        <div className="container text-center">
            <div className="row">
            <img src="media/images/homeHero.png" alt="Hero image" className="mb-5"></img>

            <h1 className="mt-5">Invest in everything</h1>

            <p>Online platform to invest in stocks, derivatives, mutual funds, and more  </p>
            <button type="button" class="btn btn-primary fs-6" style={{width:"30%", margin:"0 auto"}}>SingnUp Now</button>
            </div>
    
        </div>
     );
}

export default 
Hero;