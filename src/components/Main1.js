import React, { Component } from 'react'
import Solutions from './Solutions';
import Fade from 'react-reveal/Fade';
import axios from 'axios';

export class Main1 extends Component {

	state = {
        solutions: [],
        isLoaded: false 
    }

	componentDidMount() {
        axios.get(`http://192.168.1.182/fdcci3_react/backend/wp-json/wp/v2/flipinfo`)
          .then(res => {
            this.setState({
                data: res.data,
                isLoaded: true
            })
          })
          .catch(err => console.log(err));
    }

  render() {
	  
		
    return (
    <main id="main" className="body">
		<section id="overview">
			<div className="flex-container">
				

				<div className="box">
					<div className="section-text-container">
						
						<p > 
						<span className="a">A</span>rtificial <span className="a">I</span>ntelligence relies on datasets, but it still needs people to make sense of the data. Specializing in training data for Autonomous Vehicles, Flipside AI provides fully-trained and managed teams who can label, annotate and review your datasets.
						</p>
					</div>					
				</div>

			
		
				<div className="box">
					<div className="isoroad">
						<img src={require('../img/isoroad_revised.png')} alt="" />	
					</div>
				</div>


			</div>
		</section>

		<section className="solutions">
      		<h2 className="title">Solutions</h2>
			  <p className="text-muted sub-title">We provide quality 3D data for your business</p>
		
				<Solutions />

		
		</section>
		{/* <section className="why-work container">
		<h2 className="title ">Why Work With Us</h2>
			  <p className="text-muted sub-title">Flipside AI provides fully-managed, stable, scaleable training data refinement capacity focused on quality, with leading-edge experience and at a low cost.</p>
			  <div className="">
				  <div className="row"> <Fade bottom>
						<div className="col-xl-5 col-lg-5 col-md-5 col-xs-10 offset-xs-1 col-sm-12">
							
							<div className="whywork-body">
							<img className="whywork-image" src={require('../img/quality.png')} alt="" />
				
							<div className="whywork-description">
								<h2>Quality</h2>
								<p  >With decades of experience in high-accuracy digital publishing services for the world’s top publishing brands, Flipside has full attention to detail to ensure that training data is accurate down to the last pixel and label.</p>
							</div>
							</div>
						
						</div>
						</Fade>
						<Fade bottom>
						<div className="col-xl-5 col-lg-5 col-md-5 offset-md-2 col-xs-10 offset-xs-1 col-sm-12">
						<div className="whywork-body">
						<img className="whywork-image"  src={require('../img/lightbulb.png')} alt="" />
							</div>
							<div className="whywork-description">
								<h2>Experience</h2>
								<p  >This early in the history of Autonomous Vehicles, Flipside AI has refined hundreds of thousands of images, video and LIDAR / RADAR 3D point clouds for its clients and their clients.</p>
							</div>

						</div>
						</Fade>
				  </div>

				  <div className="row"> 
				  <Fade bottom>
						<div className="col-xl-5 col-lg-5 col-md-5 col-xs-10 offset-xs-1 col-sm-12">
							<div className="whywork-body">
							<img className="whywork-image"src={require('../img/security-confidential-privacy.png')} alt="" />
				
							<div className="whywork-description">
								<h2>Security</h2>
								<p  >Flipside AI employs in-house workers that prioritize the security and privacy of your data.</p>
							</div>
							</div>
						
						</div>
						</Fade>
						<Fade bottom>
						<div className="col-xl-5 col-lg-5 col-md-5 offset-md-2 col-xs-10 offset-xs-1 col-sm-12">
						<div className="whywork-body">
						<img className="whywork-image"  src={require('../img/adapt.png')} alt="" />
							</div>
							<div className="whywork-description">
								<h2>Flexibility</h2>
								<p  >We understand that each client is different and may have specific requirements. Our teams are cross-trained for multiple tasks thus enabling our clients to meet competing demands for capacity and timeliness.</p>
							</div>

						</div>
						</Fade>
				  </div>

			  </div>
		</section> */}

		<section id="about-us">
			<div className="content-wrap">
				<h1 >About <span id="about-style">Flipside <span className="ai">AI</span></span></h1>
				{/* <p>Flipside AI is the AI training data services unit of Flipside Digital Content Company, Inc., provider of premium digital content processing services to global blue-chip brands in the publishing industry.</p> */}
				<p>{this.state.isLoaded ? this.state.data[0].acf.about_us  : 'Flipside AI is the AI training data services unit of Flipside Digital  Content Company, Inc., provider of premium digital content processing services to global blue-chip brands in the publishing industry.'}</p>
			</div>
		</section>
	</main>
		)
  }
}

export default Main1
