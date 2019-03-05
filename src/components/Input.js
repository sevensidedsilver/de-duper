import React from 'react'

const Input = (props) => {

    return (
      <textarea value={props.value} onChange={props.handleType}/>
    )

}

export default Input
