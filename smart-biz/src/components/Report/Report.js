import './Style.css'
import './Table.scss'
import React from 'react';

import ExportOpts from '../../components/Exportation/ExportOpts';


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
        <div className='reportBody' ref={ref} style={{ textAlign: 'center', width :'60%'}}>
             
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

                            
                            
                            <div classname ="ReportText"style={{ backgroundColor: '#1f2a40',textAlign: 'justify' }}>
                            <div>
                                <h1>Relatório de Desempenho de Vendas e Análise de Métricas</h1>
                                <h3>Introdução:</h3>
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
                                <h3>2. Total de Vendas por Categoria:</h3>
                                <p>Embora a categoria de Eletrônicos seja responsável pela maior receita, é interessante observar que a categoria de
                                    Equipamentos de Som registrou um número maior de vendas, totalizando 220 unidades vendidas. Por outro lado, a
                                    categoria de Eletrônicos teve 170 unidades vendidas. Essa discrepância pode indicar que os produtos de Equipamentos
                                    de Som possuem um preço médio mais baixo em comparação com os produtos eletrônicos. É importante avaliar a
                                    estratégia de precificação desses produtos para maximizar o potencial de vendas e receita.</p>
                                <h3>3. Receita Média por Venda:</h3>
                                <p>A receita média por venda, considerando todas as categorias, é de aproximadamente €90.12. Essa receita média
                                    relativamente baixa pode indicar a necessidade de aumentar o preço médio dos produtos vendidos ou de desenvolver
                                    estratégias de venda adicionais para aumentar o valor médio de cada transação. É recomendado realizar uma análise
                                    mais aprofundada do mix de produtos e preços para identificar oportunidades de melhoria.</p>
                                <h3>4. Devoluções:</h3>
                                <p>Um aspecto preocupante é o número de devoluções registradas. No total, foram registradas 19 devoluções,
                                    correspondendo a um valor de €180,562.64. Essas devoluções representam uma parcela significativa da receita
                                    total e indicam a existência de problemas, como produtos com defeito, insatisfação dos clientes ou questões
                                    relacionadas à logística. É essencial investigar as causas das devoluções e implementar medidas corretivas,
                                

                            como aprimorar a qualidade dos produtos, oferecer suporte pós-venda e revisar as políticas de devolução. Reduzir
                                    a taxa de devoluções contribuirá para a satisfação do cliente e a melhoria da reputação da empresa.</p>
                                <h3>5. Impostos:</h3>
                                <p>Os impostos aplicados às vendas totalizaram €17,571.16. Essa parcela significativa da receita total deve ser
                                    cuidadosamente gerenciada. É importante garantir que os cálculos fiscais estejam corretos e que a empresa esteja
                                    cumprindo todas as obrigações fiscais. Recomenda-se revisar os processos internos de contabilidade e implementar
                                    controles rigorosos para garantir a conformidade fiscal e evitar possíveis penalidades.</p>
                                <h3>6. Comissões:</h3>
                                <p>As comissões por venda totalizaram €945.42. Embora as comissões sejam uma forma de incentivar a equipe de vendas,
                                    é importante avaliar sua eficácia em relação aos lucros obtidos. É necessário garantir que o valor das comissões
                                    seja equilibrado em relação aos lucros e que a estrutura de comissionamento esteja alinhada aos objetivos de
                                    negócio. Uma análise mais detalhada do desempenho individual dos vendedores pode ajudar a identificar áreas de
                                    melhoria e otimizar o sistema de comissões.</p>
                                <h3>7. Receita Líquida:</h3>
                                <p>A receita líquida total, considerando todas as despesas e impostos, resultou em um valor negativo de -€160,991.48.
                                    Esse resultado indica um prejuízo no período analisado. Para melhorar a lucratividade, é essencial realizar uma
                                    análise mais aprofundada das despesas, custos operacionais e eficiência financeira. Avaliar e reduzir despesas
                                    desnecessárias, otimizar processos e identificar oportunidades de economia são ações essenciais para reverter
                                    essa situação e alcançar resultados positivos.</p>
                                <h3>8. Análise Comparativa por Produto:</h3>
                                <ul>
                                    <li><strong>Soundbar:</strong> A categoria Soundbar gerou uma receita de €3,142 com a venda de 100 unidades.
                                        Foram registradas 5 devoluções e o valor médio da comissão por venda foi de €62.84.</li>
                                    <li><strong>Laptop:</strong> A categoria Laptop registrou uma receita de €8,300 com a venda de 50 unidades.
                                        Foram registradas 2 devoluções e o valor médio da comissão por venda foi de €332.</li>
                                    <li><strong>TV:</strong> A categoria TV gerou uma receita de €15,000 com a venda de 80 unidades. Foram registradas
                                        3 devoluções e o valor médio da comissão por venda foi de €450.</li>
                                    <li><strong>Headphone:</strong> A categoria Headphone registrou uma receita de €6,000.32 com a venda de 120 unidades.
                                        Foram registradas 8 devoluções e

                            o valor médio da comissão por venda foi de €120.</li>
                                </ul>
                                <h3>Conclusão:</h3>
                                <p>Com base na análise do desempenho de vendas e métricas apresentadas neste relatório, é recomendado que a empresa MN
                                    Retail foque em otimizar a categoria de Eletrônicos, que representa a maior parte da receita. É importante
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