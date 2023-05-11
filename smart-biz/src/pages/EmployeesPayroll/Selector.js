import Select from 'react-select'
import './Style.css'
const Selector = () => {
    const options = [
        { value: 'all', label: 'all' },
        { value: 'Sales', label: 'Sales' },
        { value: 'IT', label: 'IT' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Human Resources', label: 'Human Resources' },
        { value: 'Logistics', label: 'Logistics' },
        { value: 'Directory', label: 'Directory' }
      ]
    return <Select options={options}  required
    className={{
        innerHeight : '30px'
    }}/>
}

export default Selector;