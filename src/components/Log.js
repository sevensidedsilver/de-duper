import React from "react"



const Log = ({removedLog}) => {





  const renderLog = removedLog.map((object) =>{
    return (<div key={`${object._id}${object.entryDate}`}>
      {object._id}
      {object.email}
      {object.firstName}
      {object.lastName}
      {object.address}
      {object.entryDate}
      <span>{object.removedBecause}</span>
      </div>)
  })


  return (
    <div className="log">
      <h2>These records were removed:</h2>

      {renderLog}

    </div>
  )

}

export default Log
