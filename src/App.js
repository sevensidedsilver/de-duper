import React, { Component } from 'react';
import './App.css';

import Input from './components/Input'
import Output from './components/Output'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      result: ''
     };
  }

  handleType = (e) => {
    this.setState({input: e.target.value})
  }

  deDuplicate = () => {

    try {
        JSON.parse(this.state.input);
    } catch (e) {
        window.alert("Please enter valid JSON (array of objects)")
        return false;
    }
    let converted = JSON.parse(this.state.input)
    console.log(converted)
    this.setState({
      result: "asdf"
    })
    return true;

  }



  render() {
    return (
      <div className="App">
        <Input handleType={this.handleType} value={this.state.input}/>
        <button onClick={this.deDuplicate}>De Duplicate</button>
        <Output value={this.state.result}/>
      </div>
    );
  }
}

export default App;
