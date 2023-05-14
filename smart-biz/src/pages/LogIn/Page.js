//Para propósitos de testes
import React from "react";
import SideNav from "../../components/nav-bar/nav";
import TopNav from "../../components/top-nav/nav";
import Main from "../main";
import SideBar from "../../components/SideBar/SideBar";
import { useState } from "react";

function Page() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

return (
  <>
  <div style={{ position: 'relative' }}  >
    <div style={{ display: 'flex' }}>
                <div
                    style={{
                    width: sidebarCollapsed ? '0' : '100px',
                    marginRight: sidebarCollapsed ? '0' : '10px',
                    transition: 'width 0.3s ease-in-out, margin-right 0.3s ease-in-out',
                    }}
                >
                    <SideBar />
                </div>
                
                <div style={{ flex: 1 }} >
                  <TopNav/>
                  <Main/>

                </div>

    </div>
  </div>
  </>
);
}

export default Page;