import TopNav from '../../components/top-nav/nav'
import Selector from './Selector'
import ExportOpts from '../../components/Exportation/ExportOpts'
import './Table.scss'
import './Style.css'
import SortSelector from './SortSelector'
import employees from './Emps.json'
import { useState } from 'react'

const EmployeePayroll = () => {

    let emps = employees.employees;

    //hooks para colunas opcionais
    const [contractDate, setContractDate] = useState(false);
    const [incomeTaxes, setIncomeTaxes] = useState(false);
    const [socialSecurity, setSocialSecurity] = useState(false);
    const [regularHours, setRegularHours] = useState(false);
    const [extraHours, setExtraHours] = useState(false);

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
    
    const tableTrigger = () => {
            //console.log("Dept : ", selectedDept);
            //console.log("Sort by : ", sortOpt);
            for(let i = 0; i < sortOps.length; i ++){
                if(sortOps[i][0] == sortOpt){
                    sortOps[i][1]();
                }
            }

            if(tableGenerator === false){
                console.log(tableGenerator)
                setTable(true);

            }
            
    };


    return (
        <div className='container'>
            <TopNav></TopNav>

            <main>

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
                                    <td>{emp['Gross Salary']}</td>
                                    <td>{emp['Liquid Salary']}</td>
                                    { contractDate && <td>{emp['Contract Date']}</td>}
                                    { incomeTaxes && <td>{emp['Income Taxes Deduciton']}</td>}
                                    { socialSecurity && <td>{emp['Social Security']}</td>}
                                    { regularHours&& <td>{emp['Regular Hours of work']}</td>}
                                    { extraHours&& <td>{emp['Extra Hours of work']}</td>}
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

                    

            </main>

            <aside>
                <div className='menuBox'>

                
                    <h4>Collumns to be displayed : </h4>
                    <h6>(The payroll will be perfomed even if not select)</h6>
                    <br></br>
                    <br></br>

                    <label>
                            
                            <input type="checkbox"
                            onChange={handleContractDate}></input>
                            Contract Date
                    </label>
                    <br></br>
                    <br></br>

                    <label>
                            
                            <input type="checkbox"
                            onChange={handleIncomeTaxes}></input>
                            Income Taxes Deduciton
                    </label>
                    <br></br>
                    <br></br>

                    <label>
                            
                            <input type="checkbox"
                            onChange={handleSocialSecurity}></input>
                            Social Security
                    </label>
                    <br></br>
                    <br></br>

                    <label>
                            
                            <input type="checkbox"
                            onChange={handleRegularHours}></input>
                            Regular Hours of work
                    </label>
                    <br></br>
                    <br></br>

                    <label>
                            
                            <input type="checkbox"
                            onChange={handleExtraHours}></input>
                            Extra Hours of work
                    </label>

                    <br></br>
                    <br></br>
                    <h4>Department : </h4>
                    <h5>By default queries all departments</h5>
                    <br></br>
                    <br></br>
                    <Selector selection={setDept} opt={selectedDept}></Selector>

                    <br></br>
                    <br></br>

                    <h4>Sort the list : </h4>
                    <h5>By default sorts by the Liquid Salary</h5>

                    <br></br>
                    <br></br>
                    <SortSelector selection={setSort} opt={sortOpt}></SortSelector>

                    <br></br>
                    <br></br>
                    <button onClick={tableTrigger}>Generate</button>

                    {tableGenerator && <ExportOpts></ExportOpts>}
                        
                </div>
           
            </aside>


        </div>
    );
}

export default EmployeePayroll;