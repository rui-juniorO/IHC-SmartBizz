import './Date.css'
import './Grid.css'
import ReportPeriodRef from '../Report/ReportPeriodRef';
import ExportOpts from '../../components/Exportation/ExportOpts';
import { useState } from 'react';
function BottomGrid(props) {
    const [startDate, setStartDate] = useState(""); 
    const [endDate, setEndDate] = useState(""); 
    
    const [generateDateInInfo, setGenerator] = useState(false);

    const clearLabels = () => {
        document.getElementById('starting').value = "";
        document.getElementById('ending').value = "";
        handleStartingDate(); handleEndingDate();

    }
    
    //Handlers for the RevenueReport component page

    const handleGenerateAction = () => {
        if(startDate != "" && endDate != ""){
            props.generationTrigger();
            setGenerator(true);
        }
        else
        {
            console.log("Dates not choosen")
        }
    }

    const handleStartingDate = () => {
        const date = document.getElementById('starting').value;
        //Update the label with the choose date
        setStartDate(date);
        props.StartingDate(date);
    }

    const handleEndingDate = () => {
        const date = document.getElementById('ending').value;
        //Update the label with the choose date
        setEndDate(date);
        props.EndingDate(date);
    }

    const startDateMsg = () => {
        if(startDate != ""){
            return (
                <div>
                    <h4>From {startDate}</h4>
                </div>
                //"From "+ startDate
                );
        }
        else return null;
    }

    const endDateMsg = () => {
        if(endDate != ""){
            return (
                <div>
                    <h4> to {endDate}</h4>
                </div>
                //"From "+ startDate
                );
        }
        else return null;
    }


    return (
            
            <div className='bottomGrid'>
                
                <div>
                    <div className='datePickerGrid'>
                        <p id='startDate'>{startDateMsg()}</p>
                        <p id='endDate'>{endDateMsg()}</p>

                        <input className='datePicker' type='date' 
                        id='starting'  onChange={handleStartingDate}></input>
                        
                        <input className='datePicker' type='date' 
                        id='ending'  onChange={handleEndingDate}></input>

                    </div>


                    <div className='btnGrid'>
                        <button className='btn' onClick={handleGenerateAction}>Generate</button>
                        <button className='btn' onClick={clearLabels}>clear All</button>
                    </div>
                    
                    <div>
                        

                        {
                            generateDateInInfo ?
                            <ExportOpts></ExportOpts>
                            : null
                        }
                        

                        {
                            (generateDateInInfo && startDate != "" && endDate != "") ?
                            <ReportPeriodRef startRef={startDate} endRef={endDate}></ReportPeriodRef>
                            : null
                        }

                    </div>
                </div>

                
            </div>
            
    );
}

export default BottomGrid;