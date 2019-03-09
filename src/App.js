import React, { Component } from 'react';
import './App.css';

import Input from './components/Input'
import Output from './components/Output'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      result: [],
      removedLog: []
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

    // data prep- this step reverses the order (last entries favored as per
    // requirement #3) then
    // sorts the entries by their dates
    let sortByID = (a,b) => {
      if (a.entryDate < b.entryDate)
        return -1;
      if (a.entryDate > b.entryDate)
        return 1;
      return 0;
    }
    converted.reverse()
    converted.sort(sortByID)

    // define a reusable function to filter our collection on specified argument
    function getUnique(arr, comp) {

      const unique = arr
        .map(e => e[comp])
         // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
        // eliminate the dead keys & store unique objects
        .filter(e => arr[e]).map(e => arr[e]);
       return unique;
    }

    // remove duplicate IDs
    let uniqueIDs = getUnique(converted, '_id')
    //remove duplicate emails
    let uniqueEmails= getUnique(uniqueIDs, 'email')

    console.log(converted)
    console.log(uniqueIDs)
    console.log(uniqueEmails)

    this.setState({
      result: uniqueEmails
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
