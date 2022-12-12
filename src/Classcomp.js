import React from "react";
import image  from './medigo.jpg';
import mylogo from './logonew.png';
import './App.css';
//import './App.js';
//import Home from './Home';
//import{Link} from "react-router-dom";
class Classcomp extends React.Component
{
  
    render()
    {
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
            <h1 style={{marginLeft:'15%',color:" #3A8E7A",fontSize:'60px',marginTop:'-70px'}}>MediGo</h1>
            <form className="b">
            <h4 className="ke">For Patient</h4>
            <h1 className="kee">REGISTRATION</h1>
                <br></br><br></br><br></br>        
                <input className="h" type="text" name="name" placeholder="  First Name" required/>
                <input className="m" type="text" name="name" placeholder="  Last Name" required/><br></br><br></br>
                <input className="h" type="text" name="age" placeholder="  Age" />
            
          
                <input className="h" type="text" name="address" placeholder="  Address1" required/>
                <input className="m" type="text" name="address" placeholder="  Address2" required/><br></br><br></br>
                <input className="h" type="text" name="state" placeholder="  State" required/>
                <input className="m" type="text" name="district" placeholder="  District" required/><br></br><br></br>
                <input className="h" type="text" name="email" placeholder="  E-Mail" required/>
                <input className="m" type="text" name="no" placeholder="  Contact Number" required/><br></br><br></br>
                <input className="h" type="password" name="password" placeholder="  Password" required/>
                <input className="m" type= "Password" name="password" placeholder="  Confirm Password" required/><br></br><br></br>
                <button  className="co" style={{background:"red" ,color:"white",marginLeft:'30%'}}>Cancel</button>
                <button className="co" style={{background:"blue",color:"white",marginLeft:'10%'}}>Register</button>
                

            </form>
            </div>
        );
    }
}
export default Classcomp;