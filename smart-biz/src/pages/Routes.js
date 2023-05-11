//Vamos definir as rotas aqui exportar para o App.js
import LogIn_form from './LogIn/LogIn';
import Page from './LogIn/Page';
import RevenuePage from './RevenueReport/RevenuePage';
import EmployeePayroll from './EmployeesPayroll/EmployeePayroll';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

export default function Routing(){ 
    return (
    //All the current routes
    <Router>
      <Routes>
        <Route path='/' element={<LogIn_form/>}></Route>
        <Route path='/page' element={<Page/>}></Route>
        <Route path='/RevenueReport'  element={<RevenuePage/>}></Route>
        <Route path='/EmployeePayroll' element={<EmployeePayroll></EmployeePayroll>}></Route>
        <Route path='/sus' element='Sussy link : https://www.youtube.com/watch?v=cF5tQhVZi84'></Route>
      </Routes>
    </Router>
);
}