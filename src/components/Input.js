import React from 'react'

const Input = (props) => {

    return (
      <textarea
        placeholder="paste valid JSON here"
        value={props.value}
        onChange={props.handleType}
        rows="14"
        cols="20"/>
    )

}

export default Input
