import React from 'react';
import './style.css';
import mylogo from './loggg.png';
import {Link} from "react-router-dom";
import './App.css';
import image  from './medigo.jpg';


export default class Project extends React.Component {
  render() {
    
        const mystyle={
            backgroundImage:`url('${image}')`,
            height:'120vh',
            marginTop:'-20px',
            backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
        };
    return(
        <div style={mystyle}>
<img src={mylogo} alt="logo" className="omg"/>

          <form className="b">
        
              <h1 className = 'head1'>For Work Together</h1><br></br>
              <h1 className = 'head2'>REGISTRATION</h1><br></br>
              <input className='in1' placeholder='First name'/>
              <input className='in2' placeholder='Last Name'/><br></br><br></br>
              <input className='in3' placeholder='Age'></input>
              <select className='in4' >
  <option value="" hidden>Choose Gender</option>
  <option value="" >Male</option>
  <option value="">Female</option>
  <option value="">Other</option>
  
</select><br></br><br></br>
              <input className='in5' placeholder='Degree'/>
              <select className='in6' >
  <option value="" hidden>Worked Experience</option>
  <option value="" >No Experience</option>
  <option value="">1 year </option>
  <option value="">2 years</option>
  <option value="">5 years</option>
  <option value="">10 years</option>
  <option value="">More than 10 years</option>
  
</select><br></br><br></br>
              
              <input className='in7' placeholder='Worked Place Name'/>
              <input className='in8' placeholder='Contact Number'/><br></br><br></br>
              <input className='in9' placeholder='E-Mail'/>
              <input className='in10' placeholder='Specialization'/><br></br><br></br>
              <input className='in11' type='password' placeholder='Password'/>
              <input className='in12' type='password' placeholder='Confirm Password'/><br></br><br></br>
              <p className='in13'>If you already have an account</p>
              <Link to="/Projectlogin"><button>Log In</button></Link>
        
              </form>     
        
      </div>
    )
  }
}