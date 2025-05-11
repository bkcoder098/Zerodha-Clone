// import React from 'react'


// function  Education() {
//     return (  
//         <div className="container mt-5">
//             <div className="row">
//                 <div className="col-6">
//                     <img src="media/images/education.svg" alt="varsity" style={{width:"90%"}}></img>
//                 </div>
//                 <div className="col-6 mt-5">
//                     <h1 className="mb-3 fs-2">Free and open market education</h1>
//                     <p>arsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
//                     <a href="/" style={{textDecoration:"none"}}> Varsity  <i class="fa-solid fa-arrow-right"aria-hidden="true"></i></a>

//                     <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
//                     <a href="/" style={{textDecoration:"none"}}> TradingQ&A  <i class="fa-solid fa-arrow-right"aria-hidden="true"></i></a>

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default  Education;

//   using Ai for responsiveness

import React from 'react';

function Education() {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                {/* Image Section */}
                <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
                    <img
                        src="media/images/education.svg"
                        alt="Varsity"
                        className="img-fluid"
                        style={{ maxWidth: "90%" }}
                    />
                </div>

                {/* Text Content */}
                <div className="col-12 col-md-6 mt-md-5 px-3">
                    <h1 className="mb-3 fs-2">Free and open market education</h1>
                    <p>
                        <strong>Varsity</strong>, the largest online stock market education book in the world,
                        covering everything from the basics to advanced trading.
                    </p>
                    <a href="/" className="text-decoration-none d-inline-block mb-4">
                        Varsity <i className="fa-solid fa-arrow-right ms-1" aria-hidden="true"></i>
                    </a>

                    <p className="mt-4">
                        <strong>TradingQ&A</strong>, the most active trading and investment community in India
                        for all your market-related queries.
                    </p>
                    <a href="/" className="text-decoration-none d-inline-block">
                        TradingQ&A <i className="fa-solid fa-arrow-right ms-1" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;
