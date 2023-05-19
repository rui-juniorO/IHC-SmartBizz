import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

import { useState, useRef, useEffect } from 'react';
import BottomGrid from '../../components/Grid/BottomGrid';
import TopGrid from '../../components/Grid/TopGrid';
import TopNav from '../../components/top-nav/nav'
import Report from '../../components/Report/Report'
import SideBar from '../../components/SideBar/SideBar';
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
            <TopGrid></TopGrid>
                <TopNav></TopNav>
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
      
        </div>
            );
};

export default RevenuePage;
