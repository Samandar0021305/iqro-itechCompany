import React from 'react'

const Inputs = ({props}) => {
    
  return <input type={props.type} className={props.style} placeholder={props.placeholder} />
  
}

export default Inputs