import React, { Component } from 'react';
import Form from './Form'
import Map from './Map';


export class Footer extends Component {

	state = {
		fields: {}
	}
	onSubmit = (fields) => {
		this.setState({ fields });
	}

  render() {
    return (
		<div className="clear">
		<div className="row">

		</div>
			<footer id="footer-section">
				
			<div className="container">
				<div className="row-footer">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">                        
							<h2>Get in touch</h2>
						</div>
				</div>
				<div className="row-footer">
				<Form onSubmit={fields => this.onSubmit(fields)} />
				</div>
            </div>





		
        </footer>
	
		<div className="footer-content">
			<div className="content">
			<div className="copyright">
				<h3>Flipside</h3>
                <p>© 2019 Flipside Digital Content Company, Inc.</p>
            </div>
		
			<div className="policy">
                <p><a href="/flipside.ai/privacy and policy">Privacy & Policy</a></p>
            </div>

			</div>
   
			</div>
		</div>
)
  }
}

export default Footer
