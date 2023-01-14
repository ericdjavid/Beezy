import React from 'react'
import Image from 'next/image'
import Image1 from '../public/assets/travel.jpg'
import Image2 from '../public/assets/Img_Struct.jpg'

export default function galery() {
  return (
    <div>
    <Image src={Image1} placeholder="blur" layout='responsive'  width={2400}  height={3600} alt={"lol"} />
    </div>
  )
}
