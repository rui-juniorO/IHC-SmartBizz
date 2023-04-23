import "./LogIn.css"
import logo from '../assets/logo.png'
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
        <button className="btn">submit</button>
      
      </form>
    </div>
  );
}

export default LogIn_form;
