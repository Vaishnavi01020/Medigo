import React from "react";
import image  from './medigo.jpg';
import mylogo from './logo.jpg';
import './App.css';
class Viji extends React.Component
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
            <h4 className="ke">For Worked Together</h4>
            <h1 className="kee">REGISTRATION</h1>
                <br></br><br></br><br></br>
                <input className="h" type="text" name="name" placeholder="  First Name"/>
                <input className="m" type="text" name="name" placeholder="  Last Name"/><br></br><br></br>
                <input className="h" type="text" name="age" placeholder="  Age"/>
                <input className="m" type="text" name="gender" placeholder="  Gender"/><br></br><br></br>
                <input className="h" type="text" name="degree" placeholder="  Degree"/>
                <input className="m" type="text" name="exp" placeholder="  Worked Experience"/><br></br><br></br>
                <input className="h" type="text" name="placeName" placeholder="  Worked Place Name"/>
                <input className="m" type="text" name="no" placeholder="  Contact Number"/><br></br><br></br>
                <input className="h" type="text" name="email" placeholder="  E-Mail"/>
                <input className="m" type="text" name="special" placeholder="  Specialization"/><br></br><br></br>
                <input className="h" type="password" name="password" placeholder="  Password"/>
                <input className="m" type="Password" name="password" placeholder="  Confirm Password"/><br></br><br></br>
                <button  className="co" style={{background:"red" ,color:"white",marginLeft:'30%'}}>Cancel</button>
                <button className="co" style={{background:"blue",color:"white",marginLeft:'10%'}}>Register</button>
            </form>
            </div>
        );
    }
}
export default Viji;
