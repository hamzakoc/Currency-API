import React,{ Component} from 'react';
import './App.css';
import BritishPound from './BritishPound';

class App extends Component{
  constructor() {
    super()
    this.state = {
      americanDollars:1,
            counter:0,
            counter2:0,
            switchCurrencies:false
           
    }
    
  }

  incrementbyOne=()=>{
    this.setState({
      counter:this.state.counter +1
    })
  }

  incrementbyOne2=()=>{
    this.setState({
      counter2:this.state.counter +1
    })
  }

  ChangeCurrencies=()=>{
    this.setState({
      switchCurrencies:true
    })
  }


  render() {
  return (
    <div className="App">
      <header className="App-header">
         <div className="container">
             <div className="row">
                 <div className="col s8">
                      <p>USD {this.state.counter} <button onClick={this.incrementbyOne}>+1</button></p>
                                           
                      <br></br>
                  <BritishPound americanDollars={this.state.americanDollars} counter={this.state.counter}/>
               </div>
            </div>
        </div>
      </header>
    </div>
  );
}}

export default App;
