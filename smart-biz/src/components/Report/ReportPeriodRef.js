import './Style.css'
function ReportPeriodRef (props) {

    return (
        <div className='reportDateRef'>
            <h2>Sales Track between {props.startRef} - {props.endRef}</h2>

        </div>

    );
}

export default ReportPeriodRef;