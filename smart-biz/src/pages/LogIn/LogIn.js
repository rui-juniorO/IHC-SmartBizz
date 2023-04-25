import "./LogIn.css"
import logo from '../assets/logo.png'
import { Outlet, Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function LogIn_form() {
    let  email;
    const navigate =  useNavigate();
    const handleClick = () => {
      navigate()
    }
  return (
    <div className="form-space">
      <img src={logo}></img>
      <br></br>
      <br></br>

      <form>
        <input className="input-type2" placeholder="Email" 
        type="email" value={email} required></input>
        <br></br>
        <br></br>
        <input className="input-type2" placeholder="password" 
        type="password" value={email} required></input>
        <br></br>
        <Link to="/Page"><button className="btn">Submit</button></Link>
      </form>
    </div>
  );
}

