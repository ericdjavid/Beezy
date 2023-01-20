import React from 'react'

export default function fidelity() {
  return (

    
<div
  className="grid h-screen w-screen place-items-center px-4 text-sm font-medium bg-blurbeeliz bg-cover"
>

  <div className=" bg-pink-300">
      <div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-center sm:text-3xl">
                Comptes fidélité<span className='text-lg'>️</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                Si vous avez des comptes fidélité avec des services hotelliers ou des compagnies aériennes, nous les prendrons en compte. Vous pourrez toujours en rajouter plus tard.
                </p>  
              </div>
        </div>
    </div>
  <div className="w-full max-w-3xl rounded-lg bg-slate-700/30 shadow">
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                 </th>
            </tr>
        </thead>
            <tbody>
             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17&quot;
               </th>
               <td className="px-6 py-4">
                   Sliver
               </td>
                <td className="px-6 py-4">
                  Laptop
                </td>
               <td className="px-6 py-4">
                  $2999
                </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                  </th>
                  <td className="px-6 py-4">
                    Black
                  </td>
                  <td className="px-6 py-4">
                    Accessories
                  </td>
                  <td className="px-6 py-4">
                    $99
                  </td>
                </tr>
            </tbody>
        </table>
      </div>
  </div>
</div>
  )
}