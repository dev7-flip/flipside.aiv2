import React, { Component } from 'react';
import logo from '../img/logodawsample_white.png';

import axios from 'axios';





export class Navbar extends Component {
	state = {
		menu: [],
		isLoaded: false,
	}
	componentDidMount() {
		axios.get('wp-json/better-rest-endpoints/v1/pages')
		.then(res => this.setState({
				menu: res.data,
				isLoaded: true
		}))
		.catch(err => console.log(err));
	}

	show = (e) =>{
		e.preventDefault();
	}


  render() {
    return (

	<div>
				
		   <div className="wrapper">
		
		<nav id="fullNav" className="fullHeight">
		
			<div className="logo">
				<a href="/flipreactwp"><img src={logo} alt="Logo" /></a>
			</div>
			<div id="menu">
				<ul>
					<li><a href="/flipreactwp/whywork">Why Work With Us</a></li>
				</ul>
			</div>
				{/* <button className="btn btn-primary" id="cookie">show</button> */}
				<div id="burger-menu">
	  			<span></span>
			</div>
		</nav>
	</div>
	</div>

 
    )
  }
}

export default Navbar
