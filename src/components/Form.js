import React, { Component } from 'react';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import GIF from '../img/mail.gif';


const recaptchaRef = React.createRef();

const API_PATH = 'http://192.168.1.182/flipreactwp/api/contact/index.php';

export class Form extends Component {

    state = {
		name: '',
		email: '',
		subject: '',
        message: '',
        mailSent: false,
        sending: false,
        captchaValue: '',
        captchaError: '',
        error: null
	}

    //Reacaptcha

    onCaptchaLoad = (value) => {
        this.setState({
            captchaValue: value,
            captchaError: ''
        });
      }


    //ENd of recaptcha

    change = e => {
        this.setState({ 
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
     

      if(this.state.captchaValue === ''){
        e.preventDefault();
        this.setState({
            captchaError : 'Please verify if you are human',
            captchaValue: ''
        });
       
      }else{
        this.setState({
            sending: true
        });
        e.preventDefault();
        this.props.onSubmit(this.state);
        axios({
            method: 'POST',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: this.state
        })
        .then(res => {
            this.setState({
                name: '',
                email: '',
                subject: '',
                message: '',
                mailSent: 'sent',
                sending: false
            })
            console.log('Thank you for contacting us!');
        })
        .catch(error => {
            this.setState({ mailSent: 'not sent', sending: false });
            console.log('Message not sent, please try again');
        });
      }

    }
	
    render() {
        


        if(!this.state.mailSent && !this.state.sending){
            return (
                <div className="">
                    <form id="contact-form" className="form" method="post" onSubmit={e => this.onSubmit(e)}  >
                        <div className="form-group">
                            <label className="form-label" htmlFor="name">Your Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="name" 
                                name="name" 
                                placeholder="Your name" 
                                tabIndex="1" 
                                value={this.state.name} 
                                onChange={e => this.change(e)} 
                                required 
                            />
                        </div>                            
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Your Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                name="email" 
                                placeholder="Your Email" 
                                tabIndex="2" 
                                value={this.state.email} 
                                onChange={e => this.change(e)} 
                                required 
                            />
                        </div>                            
                        <div className="form-group">
                            <label className="form-label" htmlFor="subject">Subject</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="subject" 
                                name="subject" 
                                placeholder="Subject" 
                                tabIndex="3" 
                                value={this.state.subject} 
                                onChange={e => this.change(e)} 
                            />
                        </div>                            
                        <div className="form-group">
                            <label className="form-label" htmlFor="message">Message</label>
                            <textarea 
                                rows="5" 
                                cols="50" 
                                name="message" 
                                className="form-control" 
                                id="message" 
                                placeholder="Message..." 
                                tabIndex="4" 
                                value={this.state.message} 
                                onChange={e => this.change(e)} 
                                required>
                            </textarea>                                 
                        </div>
                        <div className="form-group">
    
                        <ReCAPTCHA
                        ref={recaptchaRef}
                        onChange={this.onCaptchaLoad}
                        sitekey="6LfForQUAAAAALIJ9tFECYF-f4gjKMhzjGUr9GYr"
                        render="explicit"
                      

                        />
                        <p className="text-danger float-left">{this.state.captchaError}</p>
      
                        </div>
                        <br />
                        
                        <div className="form-group text-center ">
                            <button type="submit" disabled={this.state.sending} className={this.state.sending ? 'btn btn-sending-order sending-cursor' : 'btn btn-start-order'}  >
                            {/* {this.state.sending ? 'Sending...' : 'Send Message' } */}
                            Send
                            </button>
                        </div>
  

                        <div>
    
                        </div>
                     
                    </form>
                </div>
               
            )
        }else if(this.state.sending && !this.state.mailSent){
            return(


<div className="row justify-content-center sending-container">
<div className="jumbotron jumbotron-fluid bgwhite">
<div className="container">

<div class="spinner-border m-5" role="status">
  <span class="sr-only">Loading...</span>
</div>
            <h3 className="display-5">Sending...</h3>
</div>
</div>
</div>
  
            )
        }else{
            return(
                <div className="row justify-content-center">
                    <div className="jumbotron jumbotron-fluid bgwhite">
                    <div className="container">
                        
                        <h1 className="display-4">Thank you for contacting us!</h1>
                        <p className="lead">Keep checking your email for our reply.</p>
                        <img src={GIF} className="gif" alt="Email Sent Successfully!" />
                    </div>
                    </div>
                </div>
            )

        }
       
        
    }
}

export default Form
