import React from 'react'
import Image from 'next/image';

function Images(props) {
    const {url,...rest} = props;
    // console.log(props);
    // const baseUrl = 
    // console.log(baseUrl);
  return (
    <div>
      <Image src={url} width={20} height={20} alt="" />
    </div>
  )
}

export default Images