import './Style.css'
import './Table.scss'
import React from 'react';
import { Box,  Typography} from "@mui/material";
import BarChart from "../../components/BarChart";
import BarChart_sales from "../../components/BarChart_sales";
import ExportOpts from '../../components/Exportation/ExportOpts';
import { salesData as data } from "../../data/mockData";
import HTMLtoPDFConverter from "../../components/HTMLtoPDFConverter";


const Report = React.forwardRef((props, ref) => {


    const sumRevenue = () => {
        let total = 0.0, i = 0;
        while( i < data.length){
            
            total = total + (data[i].price*(data[i].TotalOfSales-data[i].Devolutions)) ;
            i++;
        }
        return total;
    }

    const sumOfUnits = () => {
        let total = 0, i = 0;
        while( i < data.length){
            
            total = total + data[i].TotalOfSales ;
            i++;
        }
        return total;
    }
    const taxes = () => {
        let total = 0.0, i = 0;
        while( i < data.length){
            
            total = total + data[i].Taxes/100*data[i].price*data[i].TotalOfSales ;
            i++;
        }
        return total;
    }
    const commissions = () => {
        let total = 0.0, i = 0;
        while( i < data.length){
            
            total = total + data[i].Commission/100*data[i].price*data[i].TotalOfSales ;
            i++;
            
        }
        return total;
    }
    const liquidProfits = () => {

        let total = 0.0, i = 0;
        while( i < data.length){
            
            total = total + (data[i].price -data[i].costPerUnity)*data[i].TotalOfSales ;
            i++;
            
        }
        total = total - commissions() - taxes() - devolutionCosts()
        return total;
    }
    const devolutionCosts = () => {
        let total = 0.0, i = 0;
        while( i < data.length){
            
            total = total + data[i].Devolutions*data[i].price ;
            i++;
            
        }
        return total;
    }
    const devolutionTotal = () => {
        let total = 0.0, i = 0;
        while( i < data.length){
            
            total = total + data[i].Devolutions;
            i++;
            
        }
        return total;
    }
    const CurrencyFormatter = ( value ) => {
        const formattedValue = new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'EUR'
        }).format(value);
      
        return <span>{formattedValue}</span>;
    }
    const categoryInfo = () =>{
        let i = 0;
        let dictionary = new Map();

        while( i < data.length){
            const category = data[i].Category;
            const revenue = CurrencyFormatter(data[i].TotalOfSales*data[i].price);
            const devolutions = data[i].Devolutions;
            const marginProfit = (data[i].price/data[i].costPerUnity -1)*100;
            const sales = data[i].TotalOfSales;
            
            const categoryInfo = {
                revenue: revenue,
                devolutions: devolutions,
                marginProfit : marginProfit,
                sales : sales
              };
            dictionary.set(category, categoryInfo);
            i++;
        }
        
        return dictionary;
    }
    
    

    return (
        <div className='reportBody' ref={ref} style={{ textAlign: 'center', width :'60%'}}>
             
            <div className='reportInfoBody'>
                <h4>Total Revenue : {CurrencyFormatter(sumRevenue())} <p>  </p>  
                Total Units sold : {sumOfUnits()} units<p>  </p>
                Devolution costs: {CurrencyFormatter(devolutionCosts())} <p>  </p>
                Overall taxes deduction : {CurrencyFormatter(taxes())} <p>  </p>
                Comissions Deduction :  {CurrencyFormatter(commissions())} <p>  </p>
                Liquid profits: {CurrencyFormatter(liquidProfits())}  
                
                
                

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
                                                    <td>{CurrencyFormatter(item.TotalOfSales*item.price)}</td>
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

                            
                            
                            <div classname ="reportText"style={{ backgroundColor: '#f9f6f9',textAlign: 'justify', borderRadius: '10px'}}>
                            <div>
                                <h1 style={{ textAlign: 'center'}}>Relatório de Desempenho de Vendas</h1>
                                
                                <div>
                                </div>
                                <h3>Introdução: {categoryInfo().marginProfit}</h3>
                                <p>Este relatório tem como objetivo fornecer uma análise abrangente do desempenho de vendas da empresa MN Retail.
                                    Com base nos dados fornecidos, serão apresentadas métricas relevantes e recomendações estratégicas para otimizar
                                    o desempenho e maximizar a lucratividade. Serão analisadas as categorias de produtos, incluindo Equipamentos de
                                    Som e Eletrônicos, com foco na receita, vendas, devoluções, impostos, comissões e receita líquida.</p>
                                <h3>1. Receita Total por Categoria:</h3>
                                <p>A análise revela que a categoria de Equipamentos de Som gerou uma receita total de €9,142.32, enquanto a
                                    categoria de Eletrônicos registrou uma receita total de €25,800. Observa-se que a categoria de Eletrônicos
                                    representa a maior parte da receita, correspondendo a aproximadamente 73% do total. Essa informação sugere que
                                    há uma demanda significativa por produtos eletrônicos, o que representa uma boa oportunidade de negócio para a
                                    empresa.</p>
                                    <Box
                                        gridColumn="span 4"
                                        gridRow="span 2"
                                        backgroundColor={"#165661"}
                                        >
                                        <Typography
                                            variant="h5"
                                            fontWeight="600"
                                            sx={{ padding: "30px 30px 0 30px" }}
                                            color= "white"
                                        >
                                            Sales Revenue
                                        </Typography>
                                        <Box height="250px" mt="-20px">
                                            <BarChart isDashboard={true} />
                                        </Box>
                                        </Box>
                                <h3>2. Total de Vendas por Categoria:</h3>
                                <p>Embora a categoria de Eletrônicos seja responsável pela maior receita, é interessante observar que a categoria de
                                    Equipamentos de Som registrou um número maior de vendas, totalizando 220 unidades vendidas. Por outro lado, a
                                    categoria de Eletrônicos teve 170 unidades vendidas. Essa discrepância pode indicar que os produtos de Equipamentos
                                    de Som possuem um preço médio mais baixo em comparação com os produtos eletrônicos. É importante avaliar a
                                    estratégia de precificação desses produtos para maximizar o potencial de vendas e receita.</p>
                                    <Box
                                        gridColumn="span 4"
                                        gridRow="span 2"
                                        backgroundColor={"#165661"}
                                        >
                                        <Typography
                                            variant="h5"
                                            fontWeight="600"
                                            sx={{ padding: "30px 30px 0 30px" }}
                                            color= "white"
                                        >
                                            Sales Quantity
                                        </Typography>
                                        <Box height="250px" mt="-20px">
                                            <BarChart_sales isDashboard={true} />
                                        </Box>
                                        </Box>
                                    
                                <h3>3. Receita Média por Venda:</h3>
                                <p>A receita média por venda, considerando todas as categorias, é de aproximadamente <strong>{CurrencyFormatter(sumRevenue()/sumOfUnits())}</strong>. Essa receita média
                                    relativamente baixa pode indicar a necessidade de aumentar o preço médio dos produtos vendidos ou de desenvolver
                                    estratégias de venda adicionais para aumentar o valor médio de cada transação. É recomendado realizar uma análise
                                    mais aprofundada do mix de produtos e preços para identificar oportunidades de melhoria.</p>
                                <h3>4. Devoluções:</h3>
                                <p>Um aspecto preocupante é o número de devoluções registradas. No total, foram registradas <strong>{devolutionTotal()}</strong> devoluções,
                                    correspondendo a um valor de <strong>{CurrencyFormatter(devolutionCosts())}</strong>. Essas devoluções representam uma parcela significativa da receita
                                    total e indicam a existência de problemas, como produtos com defeito, insatisfação dos clientes ou questões
                                    relacionadas à logística. É essencial investigar as causas das devoluções e implementar medidas corretivas,
                                

                            como aprimorar a qualidade dos produtos, oferecer suporte pós-venda e revisar as políticas de devolução. Reduzir
                                    a taxa de devoluções contribuirá para a satisfação do cliente e a melhoria da reputação da empresa.</p>
                                <h3>5. Impostos:</h3>
                                <p>Os impostos aplicados às vendas totalizaram  <strong>{CurrencyFormatter(taxes())}</strong>. Essa parcela significativa da receita total deve ser
                                    cuidadosamente gerenciada. É importante garantir que os cálculos fiscais estejam corretos e que a empresa esteja
                                    cumprindo todas as obrigações fiscais. Recomenda-se revisar os processos internos de contabilidade e implementar
                                    controles rigorosos para garantir a conformidade fiscal e evitar possíveis penalidades.</p>
                                <h3>6. Comissões:</h3>
                                <p>As comissões por venda totalizaram  <strong>{CurrencyFormatter(commissions()) }</strong>. Embora as comissões sejam uma forma de incentivar a equipe de vendas,
                                    é importante avaliar sua eficácia em relação aos lucros obtidos. É necessário garantir que o valor das comissões
                                    seja equilibrado em relação aos lucros e que a estrutura de comissionamento esteja alinhada aos objetivos de
                                    negócio. Uma análise mais detalhada do desempenho individual dos vendedores pode ajudar a identificar áreas de
                                    melhoria e otimizar o sistema de comissões.</p>
                                <h3>7. Receita Líquida:</h3>
                                <p>A receita líquida total, considerando todas as despesas,impostos e custos de aquisição resultou em um valor  de € <strong>{CurrencyFormatter(liquidProfits())}</strong>.
                                    Esse resultado indica lucro no período analisado. Para melhorar a lucratividade, é essencial realizar uma
                                    análise mais aprofundada das despesas, custos operacionais e eficiência financeira. Avaliar e reduzir despesas
                                    desnecessárias, otimizar processos e identificar oportunidades de economia são ações essenciais para reverter
                                    essa situação e alcançar resultados positivos.</p>
                                <h3>8. Análise Comparativa por Produto:</h3>
                                {Array.from(categoryInfo()).map(([key, value]) => (
                                    <div key={key}>

                                        <ul>
                                            <li><strong>{key}:</strong> A categoria {key} gerou uma receita de {value.revenue} com a venda de {value.sales} unidades.
                                                Foram registradas {value.devolutions} devoluções e a margem de lucro foi de {value.marginProfit}%</li>
                                            
                                        </ul>
                                    
                                    
                                    </div>
                                ))}
                                <h3>Conclusão:</h3>
                                <p>Com base na análise do desempenho de vendas e métricas apresentadas neste relatório, é recomendado que a empresa <strong>MN
                                    Retail</strong> foque em otimizar a categoria de Eletrônicos, que representa a maior parte da receita. É importante
                                    avaliar a estratégia de precificação, a qualidade dos produtos, a satisfação do cliente e a logística para
                                    reduzir as devoluções e melhorar a rentabilidade. Além disso, é essencial rever os custos e despesas operacionais
                                    para alcançar uma receita líquida positiva. Por meio de uma análise contínua e a implementação de ações corretivas,
                                    a empresa poderá maximizar sua lucratividade e estabelecer uma posição sólida no mercado.</p>
                            </div>


                             
                        
                            </div>   
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <ExportOpts style={{ display: 'flex', justifyContent: 'center' }} />
                            </div>     
                            
           
           </div>
            
           
        </div>
    );
});


export default Report;