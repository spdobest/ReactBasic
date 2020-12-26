import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    field1: 0,
    field2: 0,
    result: 0,
    name: "",
    greeting: "",
    errorMessage: "",
    showGreeting: true,
  };

  // common method
  onValueChange = (event) => {
    console.log(
      "Switch handler Clicked " + event.target.value + "  " + event.target.id
    );

    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  // we can differentiate by using event.id and type
  calculate = (event, type) => {
    const input1 = this.state.field1;
    const input2 = this.state.field2;

    if (input1 == 0 || input1 === "" || input2 == 0 || input2 === "") {
      this.setState({
        errorMessage: "Field1 or field2 is empty",
      });
      return;
    } else {
      let result = 0;
      const field1 = parseInt(input1);
      const field2 = parseInt(input2);

      switch (type) {
        case "add":
          result = field1 + field2;
          break;
        case "sub":
          result = field1 - field2;
          break;
        case "mul":
          result = field1 * field2;
          break;
        case "div":
          result = field1 / field2;
          break;
      }

      console.log("result is " + type + " " + event.value + " " + result);
      console.log("Error " + this.state.errorMessage);
      this.setState({
        result: result,
        errorMessage: "",
      });
    }
  };

  greet = () => {
    let greetings = "Welcome Mr. " + this.state.name;
    this.setState({
      greeting: greetings
    });

    console.log("Result is  " + greetings);
  };

  render() {
    return (
      <div className="App">
        <h1> Welcome to React Basic APP </h1>

        <div className="container">
          <h3>Input 1 </h3>
          <input
            id="input1"
            name="field1"S
            placeholder="0"
            value={this.state.field1}
            onChange={this.onValueChange}
            type="number"
          />
        </div>

        <div className="container">
          <h3>Input 2 </h3>
          <input
            id="input2"
            name="field2"
            placeholder="0"
            value={this.state.field2}
            onChange={this.onValueChange}
            type="number"
          />
        </div>
        <p id="result" value={this.state.result}>
          {" "}
          Result is : {this.state.result}{" "}
        </p>
        <button id="add" onClick={() => this.calculate(this, "add")}>
          Add
        </button>
        <button id="sub" onClick={() => this.calculate(this, "sub")}>
          Substract
        </button>
        <button id="mul" onClick={() => this.calculate(this, "mul")}>
          Multiply
        </button>
        <button id="div" onClick={() => this.calculate(this, "div")}>
          Division
        </button>

        <hr></hr>

        <div className="app">
          
          {this.state.showGreeting ?
          <>
          <input
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.onValueChange}
            type="text"
          />
            <p id="result"> {this.state.greeting} </p>
            <button onClick={this.greet}>Greet</button>
            <button onClick={()=> this.setState({ showGreeting: false })}>Hide Greeting</button>
          </>
          :
          <><button 
          onClick={()=> this.setState({ showGreeting: true })}
          >
            Show Greeting
          </button></>
        }
        </div>
        {this.state.errorMessage && (
          <h3 className="error"> {this.state.errorMessage} </h3>
        )}
      </div>
    );
  }
}
export default App;
