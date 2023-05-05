import BottomGrid from '../../components/Grid/BottomGrid';
import TopGrid from '../../components/Grid/TopGrid';
import TopNav from '../../components/top-nav/nav'
import '../../components/Grid/Grid.css'
import './Style.css'
function RevenuePage() {

    let startingDate = "", endingDate = "";

    const setStartingDate = (date) => {
        startingDate = date;
        console.log(startingDate);
    };

    const setEndingDate = (date) => {
        endingDate = date;
        console.log(endingDate);

    }
    return   (
            <div> 
                <TopNav></TopNav> 
                <TopGrid></TopGrid>
                <div className='msgbox'>
                    <p>Select a beggning and ending date 
                    to generate the report</p>
                </div>


                <div className='dateLabelGrid'>
                </div>


                <BottomGrid 
                EndingDate={setEndingDate}
                StartingDate={setStartingDate}
                ></BottomGrid>
            </div>
            );
};

export default RevenuePage;