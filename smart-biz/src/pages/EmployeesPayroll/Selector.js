import Select from 'react-select'
import React from 'react'
import './Style.css'
const Selector = (props) => {

    const options = [
        { value: 'all', label: 'all' },
        { value: 'Sales', label: 'Sales' },
        { value: 'IT', label: 'IT' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Human Resources', label: 'Human Resources' },
        { value: 'Logistics', label: 'Logistics' },
        { value: 'Directory', label: 'Directory' }
      ];

      const handleSelectChange = (selectedOption) => {
        props.selection(selectedOption['value']); 
    };


    return (<Select 
        value={props.opt}
        onChange={handleSelectChange}
        options={options}
        className={{
            innerHeight : '30px'
        }}/>);
}

export default Selector;