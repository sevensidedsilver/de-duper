import React from 'react'
import Clipboard from 'react-clipboard.js'

const Output = ({results}) => {



  const copyToClipboard = str => {
    const el = document.createElement('textarea');  // Create a <textarea> element
    el.value = str;                                 // Set its value to the string that you want copied
    el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
    el.style.position = 'absolute';
    el.style.left = '-9999px';                      // Move outside the screen to make it invisible
    document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
    const selected =
      document.getSelection().rangeCount > 0        // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0)     // Store selection if found
        : false;                                    // Mark as false to know no selection existed before
    el.select();                                    // Select the <textarea> content
    document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el);                  // Remove the <textarea> element
    if (selected) {                                 // If a selection existed before copying
      document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
      document.getSelection().addRange(selected);   // Restore the original selection
    }
  };

  const renderResults = results.map((object) =>{
    return (<div key={`${object._id}${object.entryDate}`}>
      {object._id}
      {object.email}
      {object.firstName}
      {object.lastName}
      {object.address}
      {object.entryDate}
      </div>)
  })
  console.log(JSON.stringify(results))

  return (
    <div className="results" onClick={copyToClipboard(JSON.stringify(results))}>
      <h2>Results (click to copy JSON to clipboard):</h2>

      {renderResults}

    </div>
  )

}

export default Output
