import React from 'react'

const Box = (props) => {

  return (
    <div className="box" style={{backgroundColor: props.on ? "green" : "orange"}}
    onClick={props.handleClick}
    >
      
    </div>
  )
}

export default Box
