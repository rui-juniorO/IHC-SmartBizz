import './App.css';
import LogIn_form from  './LogIn/LogIn'
import Page from './LogIn/Page';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

//Acho melhor definir todas as rotas aqui
function App() {
  return (
    //All routes
    <Router>
      <Routes>
        <Route path='/' element={<LogIn_form/>}></Route>
        <Route path='/page' element={<Page/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
