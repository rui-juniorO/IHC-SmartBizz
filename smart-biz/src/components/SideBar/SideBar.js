import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import './Style.css';
import menu from './menu.png'; import home from  './home.png'
import report from './report.png'; import employees from './employees.png';
import help from './help.png'; import settings from './settings.png';
import { Link } from 'react-router-dom';
function SideBar() {
  const { collapseSidebar, isCollapsed } = useProSidebar(false);

  const colapserTrigger = () => {
    if (isCollapsed) {
      return (
        <div className={`logo ${isCollapsed ? 'collapsed' : ''}`} onClick={() => collapseSidebar()}>
          <p>SmartBiz</p>
          <img src={menu} alt="Menu Icon" />
        </div>
      );
    } else {
      return (
        <div className={`logo ${isCollapsed ? 'collapsed' : ''}`} onClick={() => collapseSidebar()}>
          <img src={menu} alt="Menu Icon" />
        </div>
      );
    }
  };


  const menuIconTrigger = (icon, label, route) => {
    //console.log("Is colapsed : ", isCollapsed)
    return (
        <Link to={route} style={{ 
            textDecoration: 'none',
            color: 'black'
         }}>
            <div className="menu-item" >
            <img src={icon} alt={label} />
            {!isCollapsed ? <p>{label}</p> : null}
            </div>
        </Link>
      
    );
  };

  



  return (
    <div style={{ display: 'flex', height: '100%', fontFamily: 'sans-serif' }}>
      <Sidebar>
        <Menu>
          <MenuItem>
            {colapserTrigger()}
          </MenuItem>
          <MenuItem> {menuIconTrigger(home, "Home", "/page")}</MenuItem>
          <MenuItem> {menuIconTrigger(report, "Revenue", "/RevenueReport")} </MenuItem>
          <MenuItem> {menuIconTrigger(employees, "Employees", "/EmployeePayroll")} </MenuItem>
          <MenuItem> {menuIconTrigger(help, "Help")} </MenuItem>
          <MenuItem> {menuIconTrigger(settings, "settings")} </MenuItem>
          
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SideBar;
