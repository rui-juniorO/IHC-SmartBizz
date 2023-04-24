import "./LogIn.css"
import logo from '../assets/logo.png'
import { Outlet, Link } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([{
  path: "./page"}
  
])
function LogIn_form() {
    let  email
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
        <Link to="./page.js"><button className="btn">submit</button></Link>
        <Link to="./page.js">Page</Link>
      </form>
    </div>
  );
}

export default LogIn_form;
