import React from 'react'
import PriceBox from './PriceBox'

export default function Pay() {
  return (
    <div className='w-full h-full p-5 m-5'>
        <h1 className='text-center text-3xl font-semibold'>Pricing</h1>
<div className="container mx-auto flex flex-wrap items-center justify-center">
 <PriceBox nb="4" type="Small business" /> 
 <PriceBox nb="6" type="Corporate"/> 
 <PriceBox nb="Contact us" type="Premium"/> 
</div>
    </div>
  )
}
