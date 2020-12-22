import './App.css';
import React, { Component } from 'react';  

class Misc extends Component {

    state = {
        field1:0,
        field2:0,
        result: 0,
        name: '',
        greeting: '',
        errorMessage: ''
    }

     onField1Change = (event) =>{
        console.log('Switch handler Clicked '+event.target.value);
        
        this.setState(
          {
            field1: event.target.value
          }
       )
    } 

    onField2Change = (event) =>{
        console.log('Switch handler Clicked '+event.target.value);
        this.setState(
          {
            field2: event.target.value
          }
       )
    } 

    onNameChange = (event) =>{
      this.setState({
        name : event.target.value
      });
      console.log('Result is  '+this.state.name); 
    } 

    // common method
    onFieldChange = (event) =>{
      console.log('Switch handler Clicked '+event.target.value+'  '+event.target.id);

      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        [name] : value
      });
  } 

    add = (event,type) =>{
       console.log('Event is '+event.id+' type '+type)
      let res =  Number.parseInt(this.state.field1)+Number.parseInt(this.state.field2);
      this.setState({
        result : res
      });

      console.log('Result is  '+this.state.result+' '+res); 
    } 

    sub = () =>{
      let res =  Number.parseInt(this.state.field1) - Number.parseInt(this.state.field2);
      this.setState({
        result : res
      });
      console.log('Result is  '+res); 
    } 

    mul = () =>{
      let res =  Number.parseInt(this.state.field1) * Number.parseInt(this.state.field2);
      this.setState({
        result : res
      });

      console.log('Result is  '+res); 
    } 

    div = () =>{
      let res =  Number.parseInt(this.state.field1) / Number.parseInt(this.state.field2);
      this.setState({
        result : res
      });

      console.log('Result is  '+res); 
    } 


    // we can differentiate by using event.id and type
    calculate = (event,type) =>{
      const field1 = this.state.field1;
      const field2 = Number.parseInt(this.state.field2);
      
      let result = 0;
     console.log(' field 1 '+field1);
      if(field1 === 0 || field2 === ''){
        this.setState({
          errorMessage: 'Field and field 2 are empty'
        });
      }
      else{
      switch(type){
        case 'add' :
          result =  field1+field2;
        break;
        case 'sub' :
          result =  field1-field2;
          break;
        case 'mul' :
          result =  field1*field2;
          break;
        case 'div' :
          result =  field1/field2;
          break;
      }

      console.log('result is '+type+' '+event.value+' '+result)
      console.log('Error '+this.state.errorMessage)
      this.setState({
        result : result
      });
    }

    };


    greet = () =>{
      let greetings =  "Welcome Mr. "+this.state.name
      this.setState({
        greeting : greetings
      });

      console.log('Result is  '+greetings); 
    } 

    render(){
        return (
          <div className="App">
          <h1> Welcome to React Basic APP </h1>
          
          <div className="container">
          <h3>Input 1  </h3>
          <input id="input1" name="field1" value={this.state.field1} onChange = { this.onFieldChange} type="number" />
          </div>
    
          <div className="container">
          <h3>Input 2  </h3>
          <input id="input2" name="field2" value={this.state.field2} onChange = { this.onFieldChange} type="number" />
          </div>
          <p id="result" value = {this.state.result} > Result is : {this.state.result} </p>
          <button id="add" onClick={() => this.calculate(this,'add')}  >Add</button>
          <button id="sub" onClick={() => this.calculate(this,'sub')}  >Substract</button>
          <button id="mul" onClick={() => this.calculate(this,'mul')}  >Multiply</button>
          <button id="div" onClick={() => this.calculate(this,'div')}   >Division</button>


<hr></hr>

<div className="app">
          <input id="name" name="name" value={this.state.name} onChange = { this.onFieldChange } type="text" />
          <p id="result"> {this.state.greeting} </p>
          <button onClick={this.greet} >Greeting</button>
        </div>
        { this.state.errorMessage &&
  <h3 className="error"> { this.state.errorMessage } </h3> }
        </div>
        )
    };
} 
export default Misc;
