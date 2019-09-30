import React from 'react';


class Policies extends React.Component{

    render(){
    // eslint-disable-next-line no-cond-assign
    if(this.props.type === 'privacy-policy'){
        return(
            <div className={this.props.mobileClass} id={this.props.linkID}>
            <h3 className="privacy-content-title" >Privacy Policy</h3>
            <p className="text-muted date-privacy"><span >Date</span>: 21st June 2019</p>
            <div className="privact-content-text">
            

            <p>
            This Privacy Policy provides information about how Flipside processes and 
            protects our visitor's data.

            Flipside considers data protection and privacy to be of paramount importance. We never
            sell personal data and comply with
            the EU General Data Protection Regulation (“GDPR”).

           For the purpose of this Privacy Policy, personal data means any information relating
            to an identified or identifiable natural person; an identifiable natural person is one
            who can be identified, directly or indirectly, in particular by reference to an
            identifier such as a name, an identification number, location data, an online identifier
            or to one or more factors specific to the physical, physiological, genetic, mental,
            economic, cultural or social identity of that natural person (the “Personal Data”).
           </p>
            </div>
            </div>
        )
    }
    else if(this.props.type === 'responsibility'){
        return(
            <div className={this.props.mobileClass} id={this.props.linkID}>
                   <h3 className="privacy-content-title " >Responsibility</h3>
                    <div className="privact-content-text">
                         <p>Flipside bears responsibility for lawfully processing your data as carried out
                      on our site.</p>
                    </div>
            </div>
        )
    }
    else if(this.props.type === 'collect'){
        return(
            <div className={this.props.mobileClass} id={this.props.linkID}>
                            <h3 className="privacy-content-title" >What Data We Collect and How We Use Them</h3>
                            
                            <div className="privact-content-text">
                            <p className="privacy-liststyle">Information You Choose to Give Us</p>

                            <p className="inner-privacylist">We receive and store any information you enter on our website or give us by 
                            email.</p>

                            <p className="inner-privacylist">We use the information you provide to respond to your requests, communicate with you,
                            provide information about our company, and improve our services.</p>

                            <p className="privacy-liststyle"> Information We Collect from <span className="font-weight-bold">Google Analytics </span> </p>

                            <p className="inner-privacylist">Users who visit this website and have JavaScript enabled are tracked through
                            Google Analytics.  Google Analytics collects information anonymously and reports website
                            trends to us without identifying individual visitors.  Google Analytics collects a 
                            variety of information from users, including  the Internet Protocol (IP address) that
                            is used to connect your computer to the Internet (which it does not report to us), 
                            your Internet Service Provider (ISP), browser type, type of operating system, the full
                            Uniform Resource Locator (URL) clickstream to, through, and from our website, including
                            date and time, cookie, the length of time you spend on particular pages, which links
                            you click while on our site, and similar site visit information. Google Analytics data
                            is shared with Google. For more information on Google Analytics or to opt-out of having
                            your information shared through Google Analytics, visit
                             <a href="http://www.google.com/intl/en/analytics/privacyoverview.html" className="text-primary"> Google Analytics</a>.
                            For more information on Google’s privacy policy, visit 
                             <a href="https://policies.google.com/privacy" className="text-primary"> Google Privacy & Terms</a>.</p>

                            <p className="privacy-liststyle">We use any data we receive to make our website easier to find in search engines and to
                            determine how visitor's use our website in order to make it more intuitive.
                            We treat this as non-personal information and do not attempt to connect
                            it to personally identifiable information, except as otherwise required by law.</p>
                            </div>
                            </div>
        )
    }else if(this.props.type === 'store'){
        return(
            <div className={this.props.mobileClass} id={this.props.linkID}>
                 <h3 className="privacy-content-title" >How We Store Your Data</h3>
                            
                            <div className="privact-content-text">
                       
                            <p >We use a select number of trusted external service providers for certain technical
                            data analysis, processing and/or storage offerings. These service providers are carefully
                            selected and meet high data protection and security standards. We only share information
                            with them that is required for the services offered.</p>

                            <p className="privacy-liststyle">We will only pass your data on to third parties without your express consent if we
                            are obliged to do so by statutory law or an instruction by a public authority or court.</p>

                            <p className="privacy-liststyle">Cookies </p>

                            <p className="inner-privacylist">Flipside uses <span className="font-weight-bold">cookies</span> to process information including standard internet log
                            information and details of the visitor’s behavioral patterns upon visiting our site.
                            This is done to provide you with a better experience, and to facilitate the use of 
                            certain functions.</p>

                            <p className="inner-privacylist"><span className="font-weight-bold">Cookies</span> are text files placed on your computer to collect 
                            standard Internet log information and visitor behavior information. Flipside does not
                            process this information to identify individual users or to match it with further data
                            on an individual user.</p>

                            <p className="inner-privacylist"><span className="font-weight-bold">Cookies</span> are stored on your individual device and you have full control over their use.
                            You may deactivate or restrict the transmission of cookies by changing the settings of
                            your web browser. Cookies that are already stored may be deleted at any time.
                            Should you visit Flipside’s site with cookies deactivated, you may possibly not be able
                            to use all of the functions on our site to the full extent.</p>

                            <p className="font-italic">For more info about the <span className="font-weight-bold">cookies</span> we make use of, please visit <a href=" http://www.allaboutcookies.org" className="text-primary">Cookie Information.</a></p>
                             </div>
            </div>
        )
    }else if(this.props.type === 'rights'){
        return(
            <div className={this.props.mobileClass} id={this.props.linkID}>
                   
                                           <h3 className="privacy-content-title" >Your Rights</h3>

                            <div className="privact-content-text" >
                            <p className="">You have the right to access, rectify, erase, and restrict processing of your Personal
                            Data provided to Flipside. You also have the right to receive from Flipside a
                            machine-readable format of the Personal Data you provided to us.

                            We can only identify you via your email address and we can only adhere to your request
                            and provide information if we have Personal Data about you through you having made
                            contact with us directly.

                            To exercise any of the rights mentioned in this Privacy Policy and/or in the event of
                            questions or comments relating to the use of Personal Data you may contact 
                            Flipside’s support team <a href="">flipsidesupport@flipsidecontent.com</a>. 
                            &nbsp;
                            <i>
                            (If you do not want Flipside to collect your data, you can opt-out by following the
                            instructions below)
                            </i>
                            </p>
                            <p className="privacy-liststyle instruction">See <a href="https://www.hotjar.com/legal/compliance/opt-out" className="text-primary" >Hotjar</a> for a sample on how to implement
                            this.</p>  
                            <p className="inner-privacylist note">
                             If implemented, use the following (<span className="font-weight-bold">Note:</span> Clearing your cookies,
                            running in incognito/private mode, or using a different browser will enable 
                            tracking again.)  

                           As an alternative, we recommend activating the “Do Not Track” setting in your browser
                            by following the below instructions. This will also opt-out you out of similar services which
                            use the “Do Not Track” setting to disable tracking

                             <a href="https://support.google.com/chrome/answer/2790761"> Turn "Do Not Track" on or off</a> here for Chrome
                            users  

                            In addition, you have the right to lodge a complaint with the data protection
                            authority in your jurisdiction.</p>
                            </div>
            </div>

        )
    }else if(this.props.type === 'processing'){
        return(
            <div className={this.props.mobileClass} id={this.props.linkID}>
                  <h3 className="privacy-content-title">Duration of Processing</h3>
                            <div className="privact-content-text">
                            <p>We will store your usage data until such time when you withdraw your consent for us
                            to do so. All other data as specified above will be retained for as long as is necessary
                            for the purpose(s) for which we originally collected it. We may also retain information
                            as required by law.</p>
                            </div>
            </div>
        )
    }else if(this.props.type === 'children'){
        return(
            <div className={this.props.mobileClass} id={this.props.linkID}>
                                          <h3 className="privacy-content-title" >Children</h3>
                            <div className="privact-content-text">
                            <p className="">Our website is not directed to children under 18, and we do not offer products or
                            services for use by children. If you are under 18, you may not provide us with any
                            personally identifiable information and you may not use our website without the
                            supervision of a parent or guardian.</p>
                            </div>
            </div>
        )
    }else if(this.props.type === 'changestopolicy'){
        return(
            <div className={this.props.mobileClass} id={this.props.linkID}>
                 <h3 className="privacy-content-title" >Changes to Our Privacy Policy</h3>

<div className="privact-content-text">
<p className="">We may revise this Privacy Policy from time to time. The most current version of this
Privacy Policy will govern our practices for collecting, processing, and disclosing 
personal data. We will provide notice of any modifications by posting a written 
notice on our site.</p>
</div>

            </div>
        )
    }else if(this.props.type === 'changestocontact'){
        return(
            <div className={this.props.mobileClass} id={this.props.linkID} > 
            <h3 className="privacy-content-title"  >Changes to Contact Details</h3>
                            <div className="privact-content-text">
                            <p className="privacy-liststyle"><span className="font-weight-bold">Address: </span>Flipside Digital Content Co., Inc.
                            Unit 301-304 3/F ICITE Bldg., Eastwood City Cyberpark
                            Bagumbayan, Quezon City 1110, Philippines</p>
                            <p className="privacy-liststyle"><span className="font-weight-bold">Contact Number: </span>+63 2 5709255</p>
                            <p className="privacy-liststyle">
                            <span className="font-weight-bold">Email : </span><a href="/" className="text-primary"> flipside@gmail.com </a> 
                            </p>

                            <br></br>

                    
                            </div>

  

            </div>
        )
    }

}

}


export default Policies;