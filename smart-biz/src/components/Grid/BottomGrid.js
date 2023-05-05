import './Date.css'
import './Grid.css'
import { useState } from 'react';
function BottomGrid(props) {
    const [startDate, setStartDate] = useState(""); 
    const [endDate, setEndDate] = useState(""); 

    const clearLabels = () => {
        document.getElementById('starting').value = "";
        document.getElementById('ending').value = "";
        handleStartingDate(); handleEndingDate();

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
    return (
            
            <div className='bottomGrid'>
                
                <div>
                <div className='datePickerGrid'>
                    <p id='startDate'>{startDate}</p>
                    <p id='endDate'>{endDate}</p>

                    <input className='datePicker' type='date' 
                    id='starting'  onChange={handleStartingDate}></input>
                    
                    <input className='datePicker' type='date' 
                    id='ending'  onChange={handleEndingDate}></input>

                </div>


                <div></div>
                <div className='btnGrid'>
                    <button className='btn'>Generate</button>
                    <button className='btn' onClick={clearLabels}>clear All</button>
                </div>
                </div>

                <div>
                <div className='msgbox'> <p>Report Model</p></div>

                </div>
            </div>
            
    );
}

export default BottomGrid;