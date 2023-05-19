import './Style.css'
import './Table.scss'
import React from 'react';



const Report = React.forwardRef((props, ref) => {


    const data = [
        {
          Product: "Soundbar",
          Category: "Sound equipments",
          Revenue: 3142,
          TotalOfSales: 100,
          Taxes: 10,
          Devolutions: 5,
          Commission:2,
        },
        {
          Product: "Laptop",
          Category: "Eletronics",
          Revenue: 8300,
          TotalOfSales: 50,
          Taxes: 15,
          Devolutions: 2,
          Commission:4,
        },
        {
          Product: "TV",
          Category: "Eletronics",
          Revenue: 15000,
          TotalOfSales: 80,
          Taxes: 8,
          Devolutions: 3,
          Commission:3,
        },
        
        {
          Product: "Headphone",
          Category: "Sound equipments",
          Revenue: 6000.32,
          TotalOfSales: 120,
          Taxes: 5,
          Devolutions: 8,
          Commission:1,
        },
        {
          Product: "Gaming Console",
          Category: "Eletronics",
          Invoicing: 8000,
          Revenue: 2500,
          TotalOfSales: 40,
          Taxes: 12,
          Devolutions: 1,
          Commission:5,
        },
      ];

    const sumRevenue = () => {
        let total = 0.0, i = 0;
        while( i < data.length){
            console.log(data[i].Revenue, i)
            total = total + data[i].Revenue ;
            i++;
        }
        return total;
    }

    const sumOfUnits = () => {
        let total = 0, i = 0;
        while( i < data.length){
            console.log(data[i].TotalOfSales, i)
            total = total + data[i].TotalOfSales ;
            i++;
        }
        return total;
    }
    const taxes = () => {
        let total = 0.0, i = 0;
        while( i < data.length){
            
            total = total + data[i].Taxes/100*data[i].Revenue ;
            i++;
        }
        return total;
    }
    const commissions = () => {
        let total = 0.0, i = 0;
        while( i < data.length){
            
            total = total + data[i].Commission/100*data[i].Revenue ;
            i++;
        }
        return total;
    }
    

    return (
        <div className='reportBody' ref={ref}>
             
            <div className='reportInfoBody'>
                <h4>Total Revenue : {sumRevenue()} €<p>  </p>  
                Total Units sold : {sumOfUnits()} units<p>  </p>  
                Overall taxes deduction : {taxes()} €<p>  </p>
                Comissions Deduction :  {commissions()} €
                </h4>
            </div>
            

           <div className='tableBody'>
                <table class="responstable">
                                <thead style={{paddingBottom: '100px'}}>
                                    <tr>
                                        <th>Product</th>
                                        <th>Category</th>
                                        <th>Revenue</th>
                                        <th>Total Of Sales</th>
                                        <th>Taxes</th>
                                        <th>Devolutions</th>
                                        <th>Comission fees</th>
                                    </tr>
                                </thead>
                                    

                                    <tbody>
                                        {

                                        data.map(
                                            item=>(
                                                <tr key={item}>
                                                    <td>{item.Product}</td>
                                                    <td>{item.Category} </td>
                                                    <td>{item.Revenue} €</td>
                                                    <td>{item.TotalOfSales} units</td>
                                                    <td>{item.Taxes} %</td>
                                                    <td>{item.Devolutions} units</td>
                                                    <td>{item.Commission} %</td>
                                                </tr>
                                            )
                                        )

                                        }
                                    </tbody>
                
                            </table>
           </div>
            
           
        </div>
    );
});


export default Report;