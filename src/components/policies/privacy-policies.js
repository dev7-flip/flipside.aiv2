import React from 'react';
import { Link } from "react-scroll";
import Policies from './policies';


class Privacy extends React.Component {


  
    render() {
        return(
            <div>
        <header id="banner-whywork">
            <div className="bg-blue"></div>
            <div className="content-wrap">
                <h1><span className="bold big">Privacy & Policy</span></h1>

            </div>
        </header>

            

        <div  className="container-fluid pivacy body">

        <div className="app ">
        <div className="flex-container">
     
                <div className="col-sm-12 col-xs-12 col-md-12 col-lg-4 col-offset-md-1">
                    <div className="privacy-list">
                        <div className="sticky">
                        <ul className="list list-list-mobile">
                            
                            <li className="item-list list-mobile dropdown-mobile" id="mob-privacy-policy"  onClick={this.dropdown}> 
                            <div className="dropdown-me"></div>
                            <Link
    activeClass="active"
    to="link-privacy-policy"
    spy={true}
    smooth={true}
    offset={-200}
    duration= {1000}
>Privacy Policy</Link>  <i  className="fas fa-chevron-down chev"></i>

</li>
<Policies type="privacy-policy" mobileClass="for-mobile mob-privacy-policy"  />
                            <li className="item-list list-mobile" id="mob-responsibility"> 
                            <Link
    activeClass="active"
    to="link-responsibility"
    spy={true}
    smooth={true}
    offset={-230}
    duration= {1000}
>Responsibility</Link> <i className="fas fa-chevron-down chev"></i></li>
<Policies type="responsibility" mobileClass="for-mobile mob-responsibility"  />  
<li className="item-list list-mobile" id="mob-store"> 
                            <Link
    activeClass="active"
    to="link-store"
    spy={true}
    smooth={true}
    offset={-265}
    duration= {1000}
>How We Store Your Data</Link> <i  className="fas fa-chevron-down chev"></i></li>
<Policies type="store" mobileClass="for-mobile mob-store"  />  
                            
                            <li className="item-list list-mobile" id="mob-collect"> 
                            <Link
    activeClass="active"
    to="link-collect"
    spy={true}
    smooth={true}
    offset={-300}
    duration= {1000}
>What Data We Collect and How We Use Them</Link> <i  className="fas fa-chevron-down chev"></i></li>
<Policies type="collect" mobileClass="for-mobile mob-collect"  />                          
                            <li className="item-list list-mobile" id="mob-rights"> 
                            <Link
    activeClass="active"
    to="link-rights"
    spy={true}
    smooth={true}
    offset={-334}
    duration= {1000}
>Your Rights</Link> <i  className="fas fa-chevron-down chev"></i></li>
<Policies type="rights" mobileClass="for-mobile mob-rights"  /> 
                            <li className="item-list list-mobile" id="mob-processing"> 
                            <Link
    activeClass="active"
    to="link-processing"
    spy={true}
    smooth={true}
    offset={-365}
    duration= {1000}
>Duration Of Processing</Link> <i  className="fas fa-chevron-down chev"></i></li>
<Policies type="processing" mobileClass="for-mobile mob-processing"  /> 
                            <li className="item-list list-mobile" id="mob-children"> 
                            <Link
    activeClass="active"
    to="link-children"
    spy={true}
    smooth={true}
    offset={-401}
    duration= {1000}
>Children</Link> <i  className="fas fa-chevron-down chev"></i></li>
<Policies type="children" mobileClass="for-mobile mob-children"  /> 
                            <li className="item-list list-mobile" id="mob-changestopolicy"> 
                            <Link
    activeClass="active"
    to="link-changestopolicy"
    spy={true}
    smooth={true}
    offset={-435}
    duration= {750}
>Changes To Our Privacy Policy</Link> <i  className="fas fa-chevron-down chev"></i></li>
<Policies type="changestopolicy" mobileClass="for-mobile mob-changestopolicy"  /> 
                            <li className="item-list list-mobile" id="mob-changestocontact"> 
    <Link
    activeClass="active"
    to="link-changestocontact"
    spy={true}
    smooth={true}
    offset={-470}
    duration= {1000}
>Changes To Contact Details</Link> <i  className="fas fa-chevron-down chev"></i></li>
<Policies type="changestocontact" mobileClass="for-mobile mob-changestocontact"  /> 
                         
                            
                        </ul>
                        </div>
       
                    </div>
                
                </div>
                <div className="col-7 d-none d-lg-block d-xl-block"> 
                    <div className="privacy-content">
                            <Policies type="privacy-policy" linkID="link-privacy-policy"/>
                            <Policies type="responsibility" linkID="link-responsibility" />
                            <Policies type="store" linkID="link-store" />
                            <Policies type="collect" linkID="link-collect" />
                            <Policies type="rights" linkID="link-rights" />
                            <Policies type="processing" linkID="link-processing" />
                            <Policies type="children" linkID="link-children" />
                            <Policies type="changestopolicy" linkID="link-changestopolicy" />
                            <Policies type="changestocontact" linkID="link-changestocontact" />                  
                    </div>
                </div>
        </div>
        </div>



        </div>
        </div>
  
                        
        )
    }

}


export default Privacy;