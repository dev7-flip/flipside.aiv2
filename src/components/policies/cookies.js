import React from 'react'
// import { Link } from 'react-router-dom';


class coockies extends React.Component {



    render(){


         return(

                <div className="cookie-container cookie-mobile  popup">
                    <div id="sticky">
                    <span className="cookie-dismissal"><i className="fas fa-times"></i></span>
                    <div className="cookie-body">
                        <div className="cookie-header"><p>This website uses cookies to personalize content and analyse traffic in order to offer you a better experience.</p></div>
                          <  div className="cookie-content">
                            <button className="btn btn-primary cookie-btn" id="acceptCookie">Accept</button>
                            <a className="btn btn-warning cookie-btn" href="/flipreactwp/privacy-and-policies">Learn More</a>
                        </div>
                    </div>

                    </div>
                </div>
             );

        }
        
       

    }

 

 


export default coockies;