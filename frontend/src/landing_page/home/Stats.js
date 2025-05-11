// import React from 'react'

// function Stats() {
//     return (  
//         <div className="container p-3">
//             <div className="row p-5 ">
//                 <div className="col-6 p-5">
//                     <h1 className="fs-2 mb-5">Trust with confidence</h1>

//                     <h2 className="fs-4">Customer-first always</h2>
//                     <p className="text-muted">That's why 1.3+ crore customers trust Zerodha with 3.5+ lakh crores worth of equity investments.   </p>

//                     <h2 className="fs-4">No spam or gimmicks</h2>
//                     <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.   </p>

//                     <h2 className="fs-4">The Zerodha universe</h2>
//                     <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.   </p>

//                     <h2 className="fs-4">Do better with money</h2>
//                     <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.   </p>
//                 </div>

//                 <div className="col-6 p-5">
//                     <img src="media/images/ecosystem.png" style={{width:"90%"}}></img>
//                     <div>
//                         <a href="/" className="mx-5" style={{textDecoration:"none"}}>Explores our Products <i class="fa-solid fa-arrow-right" aria-hidden="true"></i> </a>
//                         <a href="/" style={{textDecoration:"none"}}>Try Kite demo  <i class="fa-solid fa-arrow-right"aria-hidden="true"></i></a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Stats;






//   using Ai for responsiveness

import React from 'react';

function Stats() {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                {/* Text Content */}
                <div className="col-12 col-md-6 mb-4 mb-md-0 px-4">
                    <h1 className="fs-2 mb-4 text-center text-md-start">Trust with confidence</h1>

                    <div className="mb-3">
                        <h2 className="fs-5">Customer-first always</h2>
                        <p className="text-muted">That's why 1.3+ crore customers trust Zerodha with 3.5+ lakh crores worth of equity investments.</p>
                    </div>

                    <div className="mb-3">
                        <h2 className="fs-5">No spam or gimmicks</h2>
                        <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    </div>

                    <div className="mb-3">
                        <h2 className="fs-5">The Zerodha universe</h2>
                        <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>

                    <div className="mb-3">
                        <h2 className="fs-5">Do better with money</h2>
                        <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>

                {/* Image + Links */}
                <div className="col-12 col-md-6 px-4 text-center text-md-start">
                    <img
                        src="media/images/ecosystem.png"
                        className="img-fluid mb-4"
                        alt="Zerodha Ecosystem"
                    />
                    <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start gap-3">
                        <a href="/" className="text-decoration-none">
                            Explore our Products <i className="fa-solid fa-arrow-right ms-1" aria-hidden="true"></i>
                        </a>
                        <a href="/" className="text-decoration-none">
                            Try Kite demo <i className="fa-solid fa-arrow-right ms-1" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
