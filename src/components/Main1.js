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
				<Fade left>

				<div className="box">
					<div className="section-text-container">
						<p> 
						Artificial Intelligence relies on datasets, but it still needs people to make sense of the data. Specializing in training data for Autonomous Vehicles, Flipside AI provides fully-trained and managed teams who can label, annotate and review your datasets.
						</p>
					</div>					
				</div>

				</Fade>
				<Fade right>
				<div className="box">
					<div className="isoroad">
						<img src={require('../img/isoroad_revised.png')} alt="" />	
					</div>
				</div>

				</Fade>

			</div>
		</section>

		<section id="services">
      		<h1>Solutions</h1>
		
				<Solutions />

		
		</section>

		<section id="about-us">
			<div className="content-wrap">
				<h1 >About <span id="about-style">Flipside <span id="ai">AI</span></span></h1>
				{/* <p>Flipside AI is the AI training data services unit of Flipside Digital Content Company, Inc., provider of premium digital content processing services to global blue-chip brands in the publishing industry.</p> */}
				<p>{this.state.isLoaded ? this.state.data[0].acf.about_us  : 'Flipside AI is the AI training data services unit of Flipside Digital  Content Company, Inc., provider of premium digital content processing services to global blue-chip brands in the publishing industry.'}</p>
			</div>
		</section>
	</main>
		)
  }
}

export default Main1
