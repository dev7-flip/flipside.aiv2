import React from 'react';
import Jobs from './Jobs';

const API_PATH = "http://192.168.1.182/fdcci3_react/backend/wp-json/wp/v2/job";

export default class Careers extends React.Component {

    state = {
        loaded: false 
    }    

    componentDidMount(){
        
    }


    render(){
        return(
            <React.Fragment>
                <header className="career-header">
                    <div className="w-80 d-flex h-100 ">
                        <div className="row h-100 justify-content-center align-self-center">   
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="career-jumbotron">
                                
                                <h1 className="title">Join our team now!</h1>
                               
                            
                                </div>
                            
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                <div className="career-image">
                               
                                <img className="whywork-image "src={require('./../img/hiring.png')} alt="" />
                                </div>
    
                            </div>
                        </div>
                    </div>
                </header>
                <div className="w-80">
                    <h1 className="title">List of all jobs available</h1>
                    
                    <Jobs />
                </div>
                
               
            </React.Fragment>
        )
    }


}