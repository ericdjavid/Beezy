import React from 'react'

export default function PriceBox() {
  return (
  <div className="lg:w-1/3 md:w-1/2 p-5 w-1/3">
        <div className="p-5 rounded-lg border border-gray-200 bg-white">
            <h4> Package Pricing (with border) </h4>
            <h5 className="text-5xl font-bold py-2 text-gray-500"> $9.99<small className="text-lg">/mo</small></h5> 
            <hr/>
            <div className="my-4 flex flex-col text-base items-center">
                <p className="flex items-center w-full my-1"><svg className="mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                    </svg> This feature and that stuff </p>
                <p className="flex items-center w-full my-1"><svg className="mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                    </svg> This feature and that stuff </p>
                <p className="flex items-center w-full my-1"><svg className="mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                    </svg> This feature and that stuff </p>
                <p className="flex items-center w-full my-1"><svg className="mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                    </svg> This feature and that stuff </p>
            </div><button className="my-4 px-4 py-2 block w-full text-white bg-blue-500 hover:bg-blue-700 rounded"> Purchase </button>
        </div>
    </div>
  )
}
