import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';

export class Main2 extends Component {
  render() {
    return (
        <section id="confident" className="body">

            <div className="bg2">
                <div className="flex-container">
                    <Fade left>
                    <div className="box col-md-6 col-sm-12 col-xs-12">
                        <div className="img-wrap">
                            <img src={require('../img/quality.png')} alt="" />
                        </div>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="box">
                    <div className="section-text-container-work ">
                            <h1 className="section-title-odd">Quality</h1>
                            <p>With decades of experience in high-accuracy digital publishing services for the world’s top publishing brands, Flipside has full attention to detail  to ensure that training data is accurate down to the last pixel and label.</p>
                        </div>
                    </div>
                    </Fade>           
                </div>
            </div>

            <div className="bg3">
                <div className="flex-container">
                    <Fade left>
                    <div className="box">
                        <div className="section-text-container-work">
                            <h1 className="section-title-even">Experience</h1>
                            <p>This early in the history of Autonomous Vehicles, Flipside AI has refined hundreds of thousands of images, video and LIDAR / RADAR 3D point clouds for its clients and their clients.</p>
                        </div>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="box">
                        <div className="img-wrap">
                            <img src={require('../img/lightbulb.png')} alt="" />
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>


            <div className="bg2">
                <div className="flex-container">
                    <Fade left>
                    <div className="box">
                        <div className="img-wrap">
                            <img src={require('../img/security-confidential-privacy.png')} alt="" />
                        </div>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="box">
                        <div className="section-text-container-work">
                            <h1 className="section-title-odd">Security</h1>
                            <p>Flipside AI employs in-house workers that prioritize the security and privacy of your data.</p>						
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>

            <div className="bg3">
                <div className="flex-container">
                    <Fade left>
                    <div className="box">
                        <div className="section-text-container-work">
                            <h1 className="section-title-even">Flexibility</h1>
                            <p>We understand that each client is different and may have specific requirements. Our teams are cross-trained for multiple tasks thus enabling our clients to meet competing demands for capacity and timeliness.</p>
                        </div>
                    </div>
                    </Fade>
                    <Fade right>              
                    <div className="box">
                        <div className="img-wrap">
                            <img src={require('../img/adapt.png')} alt="" />
                        </div>	
                    </div>
                    </Fade>
                </div>
            </div>

        </section>     
    )
  }
}

export default Main2
