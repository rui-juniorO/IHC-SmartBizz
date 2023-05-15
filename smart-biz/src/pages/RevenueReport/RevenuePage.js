import { useState, useRef, useEffect } from 'react';
import BottomGrid from '../../components/Grid/BottomGrid';
import Report from '../../components/Report/Report'
import '../../components/Grid/Grid.css'
import './Style.css'

function RevenuePage() {

    const [enableReport, setenableReport] = useState(false);
    const [dateMsg, setdateMsg] = useState(true);
    const [generateAction, setGenerateAction] = useState(false);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);


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


        <div style={{ position: 'relative' }}>
                
          <div style={{ flex: 1 }}>
                {
            dateMsg ?
              <div className='msgbox'>
                <p>Select a beginning and ending date to generate the report</p>
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
              <div ref={reportRef}><Report ></Report> </div>
              : null
          }
        </div>
      
        </div>
            );
};

export default RevenuePage;