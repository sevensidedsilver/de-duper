import React from 'react'

const Output = ({results}) => {
  const renderResults = results.map((object) =>{
    return <div key={`${object._id}${object.entryDate}`}>{object._id}</div>
  })


  return (
    <div>{renderResults}</div>
  )

}

export default Output
