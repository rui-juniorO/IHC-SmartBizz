import './Style.css'
import pdf from '../../assets/pdf-icon.svg'
import jpg from '../../assets/jpg-icon.svg'
import csv from '../../assets/csv-icon.svg'
import xls from '../../assets/xls-icon.svg'
function ExportOpts(){
    return  (
        <div className="OptsGrid">
            <div> <img src={pdf} ></img> </div> 
            <div> <img src={jpg}></img> </div> 
            <div> <img src={csv}></img> </div> 
            <div> <img src={xls}></img> </div> 
        </div>
    )
}

export default ExportOpts;