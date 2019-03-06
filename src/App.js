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

// The meat and potatoes of the challenge:
  deDuplicate = () => {
    // shows the user an error if their input is invalid
    try {
        JSON.parse(this.state.input);
    } catch (e) {
        window.alert("Please enter valid JSON (array of objects)")
        return false;
    }

    // takes state value
    let converted = JSON.parse(this.state.input)

    // remove duplicates according to rules in challenge

    // data prep! this step sorts the entries by their IDs
    let sortByID = (a,b) => {
      if (a._id < b._id)
        return -1;
      if (a._id > b._id)
        return 1;
      return 0;
    }
    converted.sort(sortByID)

    // remove duplicate IDs with favor to most recent date first:
    converted.forEach(entry => {
      console.log(entry)
    })

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
