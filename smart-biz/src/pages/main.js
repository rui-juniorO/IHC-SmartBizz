import './main.css';
import { Card } from 'react-bootstrap';


function Main() {
    return (
        <div align='right' className='container'>
            <div className='c'>
              <Card className='clear'>
                <h1 className='text'>
                  <span className='a'>Welcome</span>{' '}
                  <span className='n'>User</span>{' '}
                </h1>
              </Card>
            </div>
      </div>
    );
  }
  
  export default Main;