import React from 'react'

const Input = (props) => {

    return (
      <textarea placeholder="paste valid JSON here" value={props.value} onChange={props.handleType}/>
    )

}

export default Input
