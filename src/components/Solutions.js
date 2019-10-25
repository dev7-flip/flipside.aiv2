import React from 'react';
import Fade from 'react-reveal/Fade';

class Solutions extends React.Component {

    render(){
        return(
            <div>
               
                    
            <ul className="card-list">
                    <div className="row">
                   <div className="col-xl-12 col-lg-12">
                    <Fade bottom>
                    <li className="card">
                        <div className="learn-more">
                       
                        </div>
                        <img className="card-image" src={require("../img/radddar.JPG" )} alt="LIDAR/RADAR 3D Point Cloud Annotation" />
                        <div className="card-description">
                            <h2>LIDAR/RADAR 3D Point Cloud Annotation   </h2>
                            
                        </div>
                    </li>
                    </Fade>
                    <Fade bottom>
                    <li className="card">
                        <div className="learn-more">
                       
                        </div>
                        <img className="card-image" src={require("../img/fseg.JPG" )} alt="Segmentation" />
                        <div className="card-description">
                            <h2>Segmentation</h2>
                         
                        </div>
                    </li>
                    </Fade>
                    <Fade bottom>
                    <li className="card">
                        <div className="learn-more">
                       
                        </div>
                        <img className="card-image" src={require("../img/video.JPG" )} alt="Video Annotation" />
                        <div className="card-description">
                            <h2>Video Annotation</h2>
                        </div>
                    </li>
                    </Fade>
                    </div>
                    <div className="col-xl-12 col-lg-12">
                    <Fade bottom>
                    <li className="card">
                    <div className="learn-more">
                       
                        </div>
                        <img className="card-image" src={require("../img/2dbound.JPG" )} alt="2D Bounding Boxes" />
                        <div className="card-description">
                            <h2>2D Bounding Boxes</h2>
                        </div>
                    </li>
                    </Fade>
                    
                   
                    <Fade bottom>
                    <li className="card">
                    <div className="learn-more">
                    
                        </div>
                        <img className="card-image" src={require("../img/3df.JPG" )} alt="3D Bounding Boxes" />
                        <div className="card-description">
                            <h2>3D Bounding Boxes</h2>
                        </div>
                    </li>
                    </Fade>
                    </div>
                    </div>
                </ul>
                    
              
              
            </div>
        );
    }

}

export default Solutions;