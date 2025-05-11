// import React from "react"

// function Awards() {
//     return ( 
//         <div className="container mt-5 ">
//             <div className="row p-5">
//                 <div className="col-lg-6 col-sm-12 col-md-9 ">
//                     <img  className="mt-5"src="media/images/largestBroker.svg" alt="largestBroker"></img>                    
//                 </div>

//                 <div className="col-lg-6 col-sm-12 col-md-9 pt-4 p-5 mt-5">
//                     <h1>Largest stock broker in india</h1>
//                     <p>2+ millions Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>                    
//                     <div className="row">
//                         <div className="col-6">
//                     <ul>
//                         <li><p>Futures and Options</p></li>
//                         <li><p>Commodity derivatives</p></li>
//                         <li><p>Currency derivatives</p></li>
//                     </ul>
//                     </div>

//                     <div className="col-6 ">
//                     <ul>
//                         <li><p>Stocks & Ipos</p></li>
//                         <li><p>Direct mutual funds</p></li>
//                         <li><p>Bonds and Goverment Security </p></li>
//                     </ul>
//                     </div>
//                     <img src="media/images/pressLogos.png"  style={{width:"90%"}}></img>
//                     </div>
                    
//                 </div>
//             </div>

//         </div>
//      );
// }

// export default Awards;


//   using Ai for responsiveness


import React from "react";

function Awards() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center align-items-center p-3 p-md-5">
                {/* Image Section */}
                <div className="col-lg-6 col-md-6 col-sm-12 text-center mb-4 mb-lg-0">
                    <img
                        className="img-fluid mt-3"
                        src="media/images/largestBroker.svg"
                        alt="largestBroker"
                    />
                </div>

                {/* Text + List Section */}
                <div className="col-lg-6 col-md-6 col-sm-12 mt-3 mt-lg-0">
                    <h1 className="mb-3">Largest stock broker in India</h1>
                    <p>
                        2+ million Zerodha clients contribute to over 15% of all
                        retail order volumes in India daily by trading and investing in:
                    </p>

                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity Derivatives</li>
                                <li>Currency Derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct Mutual Funds</li>
                                <li>Bonds and Government Securities</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-4 text-center text-md-start">
                        <img
                            src="media/images/pressLogos.png"
                            className="img-fluid"
                            style={{ maxWidth: "90%" }}
                            alt="Press Logos"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;