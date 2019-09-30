import React from 'react';
import Fade from 'react-reveal/Fade';

class Solutions extends React.Component {

    render(){
        return(
            <div>
              	<ul className="card-list">
                    <Fade bottom>
                    <li className="card">
                        <img className="card-image" src={require("../img/v1_lidarcar.png" )} alt="LIDAR/RADAR 3D Point Cloud Annotation" />
                        <div className="card-description">
                            <h2>LIDAR/RADAR 3D Point Cloud Annotation   </h2>
                        </div>
                    </li>
                    </Fade>
                    <Fade bottom>
                    <li className="card">
                        <img className="card-image" src={require("../img/v1_ivandes1car.png" )} alt="Segmentation" />
                        <div className="card-description">
                            <h2>Segmentation</h2>
                        </div>
                    </li>
                    </Fade>
                    <Fade bottom>
                    <li className="card">
                        <img className="card-image" src={require("../img/design1.png" )} alt="Video Annotation" />
                        <div className="card-description">
                            <h2>Video Annotation</h2>
                        </div>
                    </li>
                    </Fade>
                    <Fade bottom>
                    <li className="card">
                        <img className="card-image" src={require("../img/2dbound.png" )} alt="2D Bounding Boxes" />
                        <div className="card-description">
                            <h2>2D Bounding Boxes</h2>
                        </div>
                    </li>
                    </Fade>
                    <Fade bottom>
                    <li className="card">
                        <img className="card-image" src={require("../img/3d.png" )} alt="3D Bounding Boxes" />
                        <div className="card-description">
                            <h2>3D Bounding Boxes</h2>
                        </div>
                    </li>
                    </Fade>
                </ul>
            </div>
        );
    }

}

export default Solutions;