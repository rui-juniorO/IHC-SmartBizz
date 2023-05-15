//Para propósitos de testes
import React from "react";
import Sidebar from "../../components/nav-bar/Sidebar";
import SideNav from "../../components/nav-bar/nav";
import { Chart1 } from '../../components/charts/chart1.js';
import { Chart2 } from '../../components/charts/chart2.js';
import { Chart3 } from '../../components/charts/chart3.js';
import { Chart4 } from '../../components/charts/chart4.js';
import "./page.css" 

function Page() {
return (
  <>
  <div className="charts">
    <Chart1/>
    <br></br>
    <Chart2/>
    <br></br>
    <Chart3/>
    <br></br>
    <Chart4/>
  </div>

  </>
);
}

export default Page;