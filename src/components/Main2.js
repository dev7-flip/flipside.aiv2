import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slider from "react-slick";

export class Main2 extends Component {

    wew = (elem) => {
        return <span>elem.id</span>
    }

  render() {

    
    
   
    var settings = {
        
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        initialSlide: 0,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div>
        <section  className="body">
            <section id="overview">
			<div className="flex-container">
			

				<div className="box">
                    
					<div className="section-text-container">
                        <h1>Fun and Professional Environment</h1>  
						<p className="text-muted"> 
						Here at Flipside AI we value our staff with open communication between the administration and employees, in a light and fun working environment we make sure that our staff end their days with a smile.
						</p>
					</div>					
				</div>

		
				<div className="box">
					<div className="fun-environment">
						<img src={require('../img/19833.jpg')} alt="" />	
					</div>
				</div>

		

			</div>
		</section>     
 
       
        </section> 
        <section className="why-work solutions">
        <div className="w80">
        <h2 className="title ">Why Work With Us</h2>
        <Slider {...settings} className="slides">
            {/* Slide 1 */}
          <div className="slide" id="Quality">
            <div className="row align-items-center h-100">
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12  mx-auto">

                <div className="whywork-description">
								<h2>Quality</h2>
								<p  >With decades of experience in high-accuracy digital publishing services for the world’s top publishing brands, Flipside has full attention to detail to ensure that training data is accurate down to the last pixel and label. </p>
				</div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <img className="whywork-image img1" src={require('../img/people-podium-with-trophy_114835-214.png')} alt="" />
                 </div>
                </div>

          </div>
            {/* Slide 1 */}
            {/* Slide 2 */}
          <div className="slide" id="Experience">
            <div className="row align-items-center h-100">
                <div className=" col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12  mx-auto">

                <div className="whywork-description">
								<h2>Experience</h2>
								<p  >This early in the history of Autonomous Vehicles, Flipside AI has refined hundreds of thousands of images, videos, LIDAR and RADAR 3D point clouds for its clients and their clients.
</p>
							</div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <img className="whywork-image img2"  src={require('../img/lightbulb.png')} alt="" />
                 </div>
                </div>

          </div>
            {/* Slide 2 */}
            {/* Slide 3 */}
          <div className="slide" id="Cost Efficiency">
            <div className="row align-items-center h-100">
                <div className=" col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12  mx-auto">

                <div className="whywork-description">
								<h2>Cost Efficiency</h2>
								<p >Outsourced staffing can reduce your wage costs by up to 60%, allowing you to save money that can be used to grow and help your business.</p>
							</div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <img className="whywork-image img3" src={require('../img/investment.png')} alt="" />
                 </div>
                </div>

          </div>
            {/* Slide 3 */}
            {/* Slide 4 */}
          <div className="slide" id="Flexibility">
            <div className="row align-items-center h-100">
                <div className=" col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12  mx-auto">
                <div className="whywork-description">
								<h2>Flexibility</h2>
								<p  >We understand that each client is different and may have specific requirements. Our teams are cross-trained for multiple tasks thus enabling our clients to meet competing demands for capacity and timeliness at a fraction of the cost.
</p>
							</div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <img className="whywork-image img4"  src={require('../img/adapt.png')} alt="" />
                 </div>
                </div>

          </div>
            {/* Slide 4 */}
            {/* Slide 5 */}
          <div className="slide" id="Security">
            <div className="row align-items-center h-100">
                <div className=" col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12  mx-auto">

                <div className="whywork-description">
								<h2>Security</h2>
								<p  > Flipside AI employs in-house workers that prioritize the security and privacy of your data to avoid breaches in today's data driven world.</p>
							</div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <img className="whywork-image img5 "src={require('../img/security-confidential-privacy.png')} alt="" />
                 </div>
                </div>

          </div>
            {/* Slide 5 */}
            {/* Slide 6 */}
          <div className="slide" id="Compliance">
            <div className="row align-items-center h-100">
                <div className=" col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12  mx-auto">

                <div className="whywork-description">
								<h2>Compliance</h2>
								<p  >  Own your data throughout the annotation process. Our processing is compliant to the newest GDPR regulations for privacy and security.</p>
							</div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <img className="whywork-image img6 "src={require('../img/site_qualitypic.png')} alt="" />
                 </div>
                </div>

          </div>
            {/* Slide 6 */}
             {/* Slide 7 */}
          <div className="slide" id="Tools">
            <div className="row align-items-center h-100">
                <div className=" col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12  mx-auto">

                <div className="whywork-description">
								<h2>Use your own tools</h2>
								<p  > Flipside provides only the data labelling muscle and expertise, and does not dictate or tie you to any platform or toolset. As part of your team, we will use your own tools for seamless operational and technical integration.</p>
							</div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <img className="whywork-image img7 "src={require('../img/tooling.png')} alt="" />
                 </div>
                </div>

          </div>
            {/* Slide 7 */}
        </Slider>
      </div>
        </section>
    
        {/* <section className="">
                <h2 className="title">Flipside is Accredited by PEZA!</h2>
               
                <div className="accredited">
                    <img src={require('../img/peza.png')} alt="accredited by peza"></img>
                </div>
          
                  
  
          
          </section>   */}
          </div> 
    )
  }
}

export default Main2
