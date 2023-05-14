import TopNav from '../../components/top-nav/nav'
import Selector from './Selector'
import ExportOpts from '../../components/Exportation/ExportOpts'
import SideBar from '../../components/SideBar/SideBar';

import './Table.scss'
import './Style.css'
import SortSelector from './SortSelector'
import employees from './Emps.json'
import { useState, useEffect, useRef } from 'react'

const EmployeePayroll = () => {

    let emps = employees.employees;

    //hooks para colunas opcionais
    const [contractDate, setContractDate] = useState(false);
    const [incomeTaxes, setIncomeTaxes] = useState(false);
    const [socialSecurity, setSocialSecurity] = useState(false);
    const [regularHours, setRegularHours] = useState(false);
    const [extraHours, setExtraHours] = useState(false);


    const [selectAll, setSelectAll] = useState(false);

    const handleSelectAll = (event) => {
        const { checked } = event.target;
        setSelectAll(checked);
        setContractDate(checked);
        setIncomeTaxes(checked);
        setSocialSecurity(checked);
        setRegularHours(checked);
        setExtraHours(checked);
      };
      
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const [tableGenerator, setTable] =  useState(false);

    const [selectedDept, setDept] = useState("all");

    const [sortOpt, setSort] =  useState("Liquid Salary");

    //Sort methods
    const sortByGs = () => {
        emps.sort(function(a,b){
            return b['Gross Salary'] - a['Gross Salary'];
        })
    }

    const sortByLs = () => {
        emps.sort(function(a,b){
            return b['Liquid Salary'] - a['Liquid Salary'];
        })
    }

    const sortByTaxes = () => {
        emps.sort(function(a,b){
            return b['Income Taxes Deduciton'] - a['Income Taxes Deduciton'];
        })
    }

    const sortBySS = () => {
        emps.sort(function(a,b){
            return b['Social Security'] - a['Social Security'];
        })
    }

    const sortByRhours = () => {
        emps.sort(function(a,b){
            return b['Regular Hours of work'] - a['Regular Hours of work'];
        })
    }

    const sortByEhours = () => {
        emps.sort(function(a,b){
            return b['Extra Hours of work'] - a['Extra Hours of work'];
        })
    }

    const sortByCDate = () => {
        emps.sort(function(a,b){
            // Conversão das datas em objetos Date
            var dateA = new Date(
                parseInt(a['Contract Date'].split("-")[2]), // ano
                parseInt(a['Contract Date'].split("-")[1]) - 1, // mês (0-11)
                parseInt(a['Contract Date'].split("-")[0]) // dia
            );
            var dateB = new Date(
                parseInt(b['Contract Date'].split("-")[2]), // ano
                parseInt(b['Contract Date'].split("-")[1]) - 1, // mês (0-11)
                parseInt(b['Contract Date'].split("-")[0]) // dia
            );

            // Comparação das datas
            return dateB - dateA;
        })
    }

    const sortOps = [
        ["Gross Salary", sortByGs],
        ["Liquid Salary", sortByLs],
        ["Income Taxes Deduciton", sortByTaxes],
        ["Social Security", sortBySS],
        ["Regular Hours of work",sortByRhours],
        ["Extra Hours of work", sortByEhours],
        ["Contract Date", sortByCDate]
    ]

    
    //Handlers for Table Collumns
    const handleContractDate = (event) => {
        if(tableGenerator === false){
            setContractDate(event.target.checked);
        }
    };

    const handleIncomeTaxes = (event) => {
        if(tableGenerator === false){
            setIncomeTaxes(event.target.checked);
        }
    };

    const handleSocialSecurity = (event) => {
        if(tableGenerator === false){
            setSocialSecurity(event.target.checked);
        }
    };

    const handleRegularHours = (event) => {
        if(tableGenerator === false){
            setRegularHours(event.target.checked);
        }
    };

    const handleExtraHours = (event) => {
        if(tableGenerator === false){
            setExtraHours(event.target.checked);
        }
    };

    //Generate the table
    const tableTrigger = () => {
            //console.log("Dept : ", selectedDept);
            //console.log("Sort by : ", sortOpt);
            for(let i = 0; i < sortOps.length; i ++){
                if(sortOps[i][0] == sortOpt){
                    sortOps[i][1]();
                }
            }

            setTable((prevState) => !prevState);
            
    };

    const getDeptMembers = (dept) => {
        let total = 0 ;
        for(let i = 0; i < emps.length; i++){
            if(emps[i]['Department'] == dept){
                total ++;
            }
        }

        return total;
    };

    return (

        <div style={{ position: 'relative' }}> 
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
                <div style={{ flex: 1 }}>
                
                    <div className='container'>
                        <TopNav></TopNav>

                        <main>
                        <br></br>
                        <br></br>
                        <h3></h3>
                        <br></br>
                        <h3>Employees by Department</h3>
                        <div className='deptGrid'>
                            <h4>Sales : {getDeptMembers("Sales")}</h4>
                            <h4>IT : {getDeptMembers("IT")}</h4>
                            <h4>Marketing : {getDeptMembers("Marketing")}</h4>
                            <h4>Human Resources : {getDeptMembers("Human Resources")}</h4>
                            <h4>Logistics : {getDeptMembers("Logistics")}</h4>
                            <h4>Directory : {getDeptMembers("Directory")}</h4>
                        </div>

                            
                            <br></br>
                            <br></br>

                            <div className='tableSpot'>
                                {tableGenerator &&
                                (
                                    <table className='responstable'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Department</th>
                                            <th>Gross Salary</th>
                                            <th>Liquid Salary</th>
                                            { contractDate && <th>Contract Date</th>}
                                            { incomeTaxes && <th>Income Taxes Deduction</th>}
                                            { socialSecurity && <th>Social Security</th>}
                                            { regularHours&& <th>Regular Hours of Work</th>}
                                            { extraHours&& <th>Extra Hours of Work</th>}
                                        </tr>
                                    </thead>


                                    <tbody>

                        {
                            emps.map((emp, idx) => {
                                {
                                    if(selectedDept == null || selectedDept == "all"){
                                        return (
                                            <tr key={idx}>
                                            <td>{emp['ID']}</td>
                                            <td>{emp['Name']}</td>
                                            <td>{emp['Department']}</td>
                                            <td>{emp['Gross Salary']} $</td>
                                            <td>{emp['Liquid Salary']} $</td>
                                            { contractDate && <td>{emp['Contract Date']}</td>}
                                            { incomeTaxes && <td>{emp['Income Taxes Deduciton']} %</td>}
                                            { socialSecurity && <td>{emp['Social Security']} $</td>}
                                            { regularHours&& <td>{emp['Regular Hours of work']} hours</td>}
                                            { extraHours&& <td>{emp['Extra Hours of work']} hours</td>}
                                        </tr>


                                                );
                                    }
                                    else if (emp['Department'] == selectedDept){
                                        return (
                                            <tr key={idx}>
                                                <td>{emp['ID']}</td>
                                                <td>{emp['Name']}</td>
                                                <td>{emp['Department']}</td>
                                                <td>{emp['Gross Salary']} $</td>
                                                <td>{emp['Liquid Salary']} $</td>
                                                { contractDate && <td>{emp['Contract Date']}</td>}
                                                { incomeTaxes && <td>{emp['Income Taxes Deduciton']} %</td>}
                                                { socialSecurity && <td>{emp['Social Security']} $</td>}
                                                { regularHours&& <td>{emp['Regular Hours of work']} hours</td>}
                                                { extraHours&& <td>{emp['Extra Hours of work']} hours</td>}
                                            </tr>


                                        );
                                    }
                                    else {return null;}
                                }
                                            
                            }               
                                                            )
                                        
                        }
                                        
                                    </tbody>
                                </table>
                                )
                            }
                            </div>

                            

                                

                        </main>

                        <aside>
                            <div className='menuBox'>

                            
                                <h4>Collumns to be displayed : </h4>
                                <h6>(The payroll will be perfomed even if not select)</h6>
                                <br></br>
                                <br></br>

                                <label>
                                        <input type="checkbox"
                                        onChange={handleSelectAll}></input>
                                        Select All
                                </label>
                                <br></br>
                                <br></br>

                                <label>
                                        
                                        <input type="checkbox"
                                        checked={contractDate}
                                        onChange={handleContractDate}></input>
                                        Contract Date
                                </label>
                                <br></br>
                                <br></br>

                                <label>
                                        
                                        <input type="checkbox"
                                        checked={incomeTaxes}
                                        onChange={handleIncomeTaxes}></input>
                                        Income Taxes Deduciton
                                </label>
                                <br></br>
                                <br></br>

                                <label>
                                        <input type="checkbox"
                                        checked={socialSecurity}
                                        onChange={handleSocialSecurity}></input>
                                        Social Security
                                </label>
                                <br></br>
                                <br></br>

                                <label>
                                        <input type="checkbox"
                                        checked={regularHours}
                                        onChange={handleRegularHours}></input>
                                        Regular Hours of work
                                </label>
                                <br></br>
                                <br></br>

                                <label>
                                        <input type="checkbox"
                                        checked={extraHours}
                                        onChange={handleExtraHours}></input>
                                        Extra Hours of work
                                </label>

                                <br></br>
                                <h4>Department : </h4>
                                <h5>By default queries all departments</h5>
                                <br></br>
                                <Selector selection={setDept} opt={selectedDept}></Selector>

                                <br></br>

                                <h4>Sort the list : </h4>
                                <h5>By default sorts by the Liquid Salary</h5>

                                <br></br>
                                <SortSelector selection={setSort} opt={sortOpt}></SortSelector>

                                <br></br>
                                <button onClick={tableTrigger} >
                                {tableGenerator ? <p>Clear Table</p> : <p>Generate Payrolls</p>}
                                </button>
                                <div style={{paddingBottom : '60px'}}>
                                    {tableGenerator && <ExportOpts></ExportOpts>}
                                </div>
                                    
                            </div>
                    
                        </aside>


                        </div>
                </div>
                    
            </div>
            
        </div>
        
    );
}

export default EmployeePayroll;