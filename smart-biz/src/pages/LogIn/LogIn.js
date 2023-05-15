import "./LogIn.css"
import logo from '../assets/logo.png'
import {  Link } from "react-router-dom";
import './style.css';
import smartbizLogo from './smartbiz.png';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function LogIn_form() {
  return (
    <div className="container" style={{marginTop: '5%'}}>
      <div className="card">
        <div className="row">
          <div className="col-md-6">
            <img src={smartbizLogo} className="card-img" alt="SmartBiz Logo" />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <div className="text-center">
                <h1 className="h1 text-gray-900 mb-4" style={{fontSize: '60px'}}>SmartBiz</h1>
                <h1 className="h3 text-gray-900 mb-4">Seja bem vindo!</h1>
              </div>
              <h5 className="card-title">Login</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" className="form-control" id="email" placeholder="Digite seu email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Senha:</label>
                  <input type="password" className="form-control" id="password" placeholder="Digite sua palavra passe" />
                </div>
                <div className="text-center">
                  <Link to="/page"><button type="submit" className="btn btn-primary" style={{marginTop: '40px', width: '100px'}}>Login</button></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
