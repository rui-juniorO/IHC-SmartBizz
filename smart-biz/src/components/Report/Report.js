import './Style.css'
import './Table.scss'
function Report(){


    const data = [
        {
        Product: "Cama Box Casal",
        Invoicing : 768.90, 
        Revenue: 668.90,
        TotalOfSales: 13 ,
        Taxes : 11 ,
        Devolutions : 3
        },

        {
            Product: "Mesa de jantar (4 pessoas)",
            Invoicing : 749.00, 
            Revenue: 623.00,
            TotalOfSales : 21,
            Taxes : 10,
            Devolutions :2 
        },

        {
            Product: "Sanita Polo Branco (Aquecida)",
            Invoicing : 51.00, 
            Revenue: 41.00,
            TotalOfSales : 30 ,
            Taxes : 9,
            Devolutions : 0 
        }
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

    return (
        <div className='reportBody'>
             
            <div className='reportInfoBody'>
                <h4>Total Revenue : {sumRevenue()} $<p>  </p>  
                Total Units sold : {sumOfUnits()} units<p>  </p>  
                Overall taxes deduction : 110 $<p>  </p>
                Comissions Deduction :  140 $
                </h4>
            </div>

           
            
            <table class="responstable">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Invoicing</th>
                        <th>Revenue</th>
                        <th>Total Of Sales</th>
                        <th>Taxes</th>
                        <th>Devolutions</th>
                    </tr>
                </thead>
                    

                    <tbody>
                        {

                        data.map(
                            item=>(
                                <tr key={item}>
                                    <td>{item.Product}</td>
                                    <td>{item.Invoicing} $</td>
                                    <td>{item.Revenue} $</td>
                                    <td>{item.TotalOfSales} units</td>
                                    <td>{item.Taxes} %</td>
                                    <td>{item.Devolutions} units</td>
                                </tr>
                            )
                        )

                        }
                    </tbody>
  
            </table>

        </div>
    );
}


export default Report;