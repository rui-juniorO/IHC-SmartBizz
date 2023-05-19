import Select from 'react-select'
import React from 'react'
import './Style.css'
const SortSelector = (props) => {

    const options = [
        { value: 'Gross Salary', label: 'Gross Salary' },
        { value: 'Liquid Salary', label: 'Liquid Salary' },
        { value: 'Income Taxes Deduciton', label: 'Income Taxes Deduciton' },
        { value: 'Social Security', label: 'Social Security' },
        { value: 'Regular Hours of work', label: 'Regular Hours of work' },
        { value: 'Extra Hours of work', label: 'Extra Hours of work' },
        { value: 'Contract Date', label: 'Contract Date' }

      ];

      const selectedOption = options.find((option) => option.value === props.opt);

      const handleSelectChange = (selectedOption) => {
        props.selection(selectedOption['value']); // Chama a função de seleção passada por props
        //console.log("Dept : ", selectedOption['value'])
    };


    return (<Select 
        value={selectedOption}
        onChange={handleSelectChange}
        options={options}
        className={{
            innerHeight : '30px'
        }}/>);
}

export default SortSelector;