import React from 'react';
import axios from 'axios';

const API_PATH = "http://192.168.1.182/fdcci3_react/backend/wp-json/wp/v2/job";

class Jobs extends React.Component {

    state = {
        loaded: false,
        data: ''
    }

    componentDidMount(){
            axios
              .get(API_PATH)
              .then(res => this.setState({ data: res.data, loaded: true}))
              .catch(err => console.log(err));        
         
    }

    

    render(){
        console.log(this.state.data);

        if(this.state.loaded){
            return(
                <div className="job-section">
                    { this.state.data.map((data, i) => (   

            <div className="job-list">
                <div class="card job-card">
                    <div class="card-header">
                        {data.title.rendered}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Job Type: Full-time</h5>
                        <div class="card-text" dangerouslySetInnerHTML={{ __html: data.content.rendered}}>
                        
                        
                        </div>
                        <a href={data.acf.job_links} class="btn btn-primary card-b">Apply</a>
                    </div>
                    </div>
                    </div>


                        )) }
                        </div>
                
            );
        }else{
            return(
                <div>
                    <div>loading</div>
                </div>
            );
        }

    }

}

export default Jobs;