import React, { Component } from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';

export class Solutions extends Component {
	state = {
        solutions: [],
        isLoaded: false 
    }

	componentDidMount() {
        axios.get(`http://192.168.1.182/fdcci3_react/backend/wp-json/wp/v2/solutions`)
          .then(res => {
            this.setState({
                solutions: res.data,
                isLoaded: true
            })
          })
          .catch(err => console.log(err));
    }
    
    render() {
        const { solutions, isLoaded } = this.state;

        if(isLoaded) {
            // console.log(solutions);
            return (
                // Loop solutions card list
                <div>
                { solutions.map((solution, i) => (   

                    <Fade bottom>

                    
                    <li key={solution.id} className="card">
                        {/* <img className="card-image" src={solution.acf.solution_image.replace(/localhost/g,'192.168.1.182')} alt={solution.solution_title} /> */}
                        <img className="card-image" src={solution.acf.solution_image} alt={solution.solution_title} />
                        <div className="card-description">
                            <h2>{solution.acf.solution_title}</h2>
                        </div>
                    </li> 

                    </Fade>
                )) }
                </div>
            )
        }
        return <h3>Loading...</h3>
    }
}

export default Solutions
