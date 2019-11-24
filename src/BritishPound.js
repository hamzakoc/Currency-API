import React, {Component} from 'react'
import {Table} from 'reactstrap'

class BritishPound extends Component {
    constructor() {
        super()
        this.url = 'https://api.exchangeratesapi.io/latest?base=USD'
        this.state = {
            currentUSDCurrency:'',
         };
        
    }

    loadQuote = () => {
        fetch(this.url)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            this.setState({
                 currentUSDCurrency:{...data.rates},
                  })

            
        })

    } 

    componentDidMount(){
        this.loadQuote()
    }
    
    

   
    render() {
        return (
            <div className="">
                
                                
                <Table dark>
                        <thead >
                            <tr>
                            <th></th>
                            <th>Currency</th>
                            <th>Amount</th>
                            <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row"></th>
                            <td>British Pound </td>
                            <td>{this.props.counter*this.state.currentUSDCurrency.GBP}</td>
                            <td>{this.state.currentUSDCurrency.GBP}</td>
                            </tr>
                            <tr>
                            <th scope="row"></th>
                            <td>Chinese Yuan</td>
                            <td>{this.props.counter*this.state.currentUSDCurrency.CNY}</td>
                            <td>{this.state.currentUSDCurrency.CNY}</td>
                            </tr>
                            <tr>
                            <th scope="row"></th>
                            <td>Turkish Lira</td>
                            <td>{this.props.counter*this.state.currentUSDCurrency.TRY}</td>
                            <td>{this.state.currentUSDCurrency.TRY}</td>
                            </tr>
                        </tbody>
                    </Table>
              

                          
               {console.log(this.state.currentUSDCurrency)}
            </div>
        )
    }
}

export default BritishPound