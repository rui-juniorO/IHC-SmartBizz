import { useState, useRef, useEffect } from 'react';
import { Box } from "@mui/material";
import Header from "../../components/Header";
import BottomGrid from '../../components/Grid/BottomGrid';
import Report from '../../components/Report/Report'
import '../../components/Grid/Grid.css'
import './Style.css'

function RevenuePage() {

    const [enableReport, setenableReport] = useState(false);
    const [dateMsg, setdateMsg] = useState(true);
    const [generateAction, setGenerateAction] = useState(false);


    const reportRef = useRef(null);
    
    //const[endRef, setEndRef] = useState("")
    //const[startRef, setStartRef] = useState("")

    let startingDate = "", endingDate = "";

    const checkDates = () => {
        if(startingDate != "" && endingDate != "")
        {
            setenableReport(true);
            setdateMsg(false);
        }
        else
        {
            setenableReport(false);
            setdateMsg(true);

        }
        //console.log(enableReport);
    }
    const setStartingDate = (date) => {
        startingDate = date;
        console.log("startingDate : ", startingDate, " endingDate : ", endingDate)
        checkDates();

    };

    const setEndingDate = (date) => {
        endingDate = date;
        console.log("startingDate : ", startingDate, " endingDate : ", endingDate)
        checkDates();

    }
    
    const generateReport = () => {
        setGenerateAction(true);
      };
      
      useEffect(() => {
        if (generateAction && reportRef.current) {
          reportRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start"
          });
        }
      }, [generateAction]);

        

    return   (

      


        <div className='pageContainer' style={{ position: 'relative' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header  title= "Reports" subtitle= "Generate a revenue report between selected dates" />        
        </Box>     
          <div >
                {
            dateMsg ?
              <div className='msgbox'style={{ backgroundColor: '#1f2a40', justifyContent: 'center', alignItems: 'center' }} >
                <p>Select a beginning and ending dates in order to generate the report</p>
                
              </div>
              : null
          }
          
          <BottomGrid
          
            EndingDate={setEndingDate}
            StartingDate={setStartingDate}
            generationTrigger={generateReport}
          ></BottomGrid>
          {
            generateAction ?
              <div ref={reportRef}>
                <Report startDate={startingDate}></Report>
                
              
              </div>
              : null
          }
        </div>
      
        </div>
            );
};

export default RevenuePage;