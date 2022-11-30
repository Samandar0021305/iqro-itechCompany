import React from 'react'

const Inputs = ({props}) => {
    
  return <input type={props.type} className={` py-4 border border-blackDev pl-6 w-full sm:w-[270px] md:w-[350px] lg:w-3/4 ${props.style}`} placeholder={props.placeholder} />
  
}

export default Inputs