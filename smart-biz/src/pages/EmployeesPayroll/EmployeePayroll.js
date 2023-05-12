import TopNav from '../../components/top-nav/nav'
import Selector from './Selector'
import employees from './Emps.json'
import './Table.scss'
//import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react'
import './Style.css'
const EmployeePayroll = () => {

    //hooks para colunas opcionais
    const [contractDate, setContractDate] = useState(false);
    const [incomeTaxes, setIncomeTaxes] = useState(false);
    const [socialSecurity, setSocialSecurity] = useState(false);
    const [regularHours, setRegularHours] = useState(false);
    const [extraHours, setExtraHours] = useState(false);

    const [tableGenerator, setTable] =  useState(false);

    const [selectedDept, setDept] = useState("all");

    const states = [
        "contractDate", "incomeTaxes", "socialSecurity", 
         "regularHours", "extraHours"
    ]

    const SetStates = [
        setContractDate, setIncomeTaxes, setSocialSecurity, 
        setRegularHours, setExtraHours
    ]


    /*
    useEffect(() => {
            // Iterar sobre os estados e armazenar no localStorage se o valor for verdadeiro
            Object.entries(states).forEach(([key, value]) => {
            if (value === true) {
                localStorage.setItem(key, value);
            }
            });
        }, [states]);
    */
    
    const checkEmpDept = (emp) => {
        //Default : todos os departamentos
        if(selectedDept === null || selectedDept === "all"){
            return (
                <tr>
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
        //O Departamento selecionado no select
        else if(emp['Department'] == selectedDept){
            return (
                <tr>
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
        else {return null;}
    }
    
    const storeState = (key ,state) => {
        localStorage.setItem(key, state);
    }




    const tableTrigger = () => {
        console.log("Dept : ", selectedDept);
        if(tableGenerator === false){
            console.log(tableGenerator)
            setTable(true);

        }
        else{
            //Recarrega a pagina (useState voltam ao state original)
            window.location.reload();
            // Código antes da recarga da página

            setTimeout(() => {
                // Código após a recarga da página
                // Coloque aqui o código que você deseja que seja executado após a recarga
            
                let index; let statValue;
                //Verificar cada estado no localStorage
                for(index = 0; index < SetStates.length; index++){

                    statValue = localStorage.getItem(states[index]);
                    //Se antes do reload a opção havia sido selecionada
                    //Mas a tabela ja havia sido criada, dar set no estado novamente
                    if(statValue == true){
                        console.log(states[index], statValue)
                        SetStates[index](statValue);
                    }

                }

                setTable(true);
            }, 4000); // Tempo de espera em milissegundos (exemplo: 1 segundo)
            
            console.log(444)
            
            
        }
    };



    const handleContractDate = (event) => {
        if(tableGenerator === false){
            setContractDate(event.target.checked);
            storeState("ContractDate",event.target.checked);
        }
        else
        {
            storeState("ContractDate",event.target.checked);

        }
    };

    const handleIncomeTaxes = (event) => {
        if(tableGenerator === false){
            setIncomeTaxes(event.target.checked);
            storeState("IncomeTaxes",event.target.checked);

        }
        else
        {
            storeState("IncomeTaxes",event.target.checked);

        }
    };

    const handleSocialSecurity = (event) => {
        if(tableGenerator === false){
            setSocialSecurity(event.target.checked);
            storeState("socialSecurity",event.target.checked);
        }
        else
        {
            storeState("socialSecurity",event.target.checked);

        }
    };

    const handleRegularHours = (event) => {
        if(tableGenerator === false){
            setRegularHours(event.target.checked);
            storeState("regularHours",event.target.checked);
        }
        else
        {
            storeState("regularHours",event.target.checked);

        }
    };

    const handleExtraHours = (event) => {
        if(tableGenerator === false){
            setExtraHours(event.target.checked);
            storeState("extraHours",event.target.checked);
        }
        else
        {
            storeState("extraHours",event.target.checked);

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
                                employees.employees.map((emp, idx) => {
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
                <h6>(The payroll will be perfomed even if not select )</h6>
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

                <br></br>
                <br></br>
                <button onClick={tableTrigger}>Generate</button>

                        
                </div>
           
            </aside>


        </div>
    );
}

export default EmployeePayroll;