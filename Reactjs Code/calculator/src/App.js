import React from 'react';
import './App.css';
import { Button } from "./myComponents/Buttons";
import { Input } from "./myComponents/TextBox";
import { ClearButton } from "./myComponents/TextBox";
import * as math from 'mathjs';

class App extends React.Component {


  
  constructor(props) {

    super(props);
    
    this.state = { input: '' };
  
  };

  addtoInput = val => {
    if (isNaN(val) && isNaN(this.state.input[this.state.input.length-1])){
      this.setState({ input: this.state.input});
    }
    else{
    this.setState({ input: this.state.input + val });
  }
  };
  
  handleEqual = () => {
    if(isNaN(this.state.input[this.state.input.length-1])){
      this.setState({input: this.state.input});
    }
    else{
    this.setState({input: math.evaluate(this.state.input)});
  }
};

  render() {
  return (
    <div className="app">
      <div className="calc-wrapper">
      <div className="row">
        <ClearButton handleClear={() => this.setState({input: ""})}>C</ClearButton>
        <Input input={this.state.input} />
      </div>
        <div className="row">
          <Button handleClick={this.addtoInput}>7</Button>
          <Button handleClick={this.addtoInput}>8</Button>
          <Button handleClick={this.addtoInput}>9</Button>
          <Button handleClick={this.addtoInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addtoInput}>4</Button>
          <Button handleClick={this.addtoInput}>5</Button>
          <Button handleClick={this.addtoInput}>6</Button>
          <Button handleClick={this.addtoInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addtoInput}>1</Button>
          <Button handleClick={this.addtoInput}>2</Button>
          <Button handleClick={this.addtoInput}>3</Button>
          <Button handleClick={this.addtoInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={() => this.handleEqual()}>=</Button>
          <Button handleClick={this.addtoInput}>0</Button>
          <Button handleClick={this.addtoInput}>.</Button>
          <Button handleClick={this.addtoInput}>-</Button>
        </div>
      </div>
    </div>
  );
}
}
export default App;
