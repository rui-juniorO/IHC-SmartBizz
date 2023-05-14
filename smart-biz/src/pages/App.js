import './App.css';
import Routing from './Routes';
import { ProSidebarProvider } from 'react-pro-sidebar';



function App() {
  return (
    //All routes
    <ProSidebarProvider>
      <div style={{ position: 'relative' }}>
        <Routing></Routing>
      </div>
    </ProSidebarProvider>
  );
}

export default App;
