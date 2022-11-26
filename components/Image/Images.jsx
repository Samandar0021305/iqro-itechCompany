import React from 'react'
import Image from 'next/image';

function Images(props) {
  const { url, ...rest } = props;
  return (
    <div>
      <Image src={url} width={20} height={20} alt="" />
    </div>
  )
}

export default Images