import './Style.css'
import pdf from '../../assets/pdf-icon.svg'
import jpg from '../../assets/jpg-icon.svg'
import csv from '../../assets/csv-icon.svg'
import xls from '../../assets/xls-icon.svg'
function ExportOpts(){
    return  (
        <div>
            <h4 style={{ padding : "5px" }}>Export as</h4>
            <div className="OptsGrid">
                <div> <img src={pdf} ></img> </div> 
                <div> <img src={jpg}></img> </div> 
                <div> <img src={csv}></img> </div> 
                <div> <img src={xls}></img> </div> 
            </div>
        </div>
    )
}

export default ExportOpts;