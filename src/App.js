import React, { Component } from 'react';
import './App.css';

import Input from './components/Input'
import Output from './components/Output'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      result: []
     };
  }

  handleType = (e) => {
    this.setState({input: e.target.value})
  }

  deDuplicate = () => {
    // shows the user an error if their input is invalid
    try {
        JSON.parse(this.state.input);
    } catch (e) {
        window.alert("Please enter valid JSON (array of objects)")
        return false;
    }

    // takes state value
    let converted = JSON.parse(this.state.input).sort()
    console.log(converted)
    this.setState({
      result: converted
    })
    return true;

  }



  render() {
    return (
      <div className="App">
        <Input handleType={this.handleType} value={this.state.input}/>
        <button onClick={this.deDuplicate}>De Duplicate</button>
        <Output results={this.state.result}/>
      </div>
    );
  }
}

export default App;
