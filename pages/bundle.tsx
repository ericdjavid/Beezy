import React from 'react'

export default function fidelity() {
  return (

    
<div
  className="grid h-screen place-items-center text-sm font-medium w-screen bg-blurbeeliz bg-cover"
>

      <div className="w-full max-w-5xl">
          
          <div className="relative overflow-x-auto w-full">
              <h1 className="p-12 font-bold text-4xl italic text-center">Nouveau voyage</h1>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-auto">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Titre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Jour
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Heure
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Lieu
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Durée
                        </th>
                    </tr>
                  </thead>
                  <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                 Rdv avec Xavier
                            </th>
                            <td className="px-6 py-4">
                                  15/03/23
                            </td>
                            <td className="px-6 py-4">
                                  10:20
                            </td>
                            <td className="px-6 py-4">
                                  Nice
                            </td>
                            <td className="px-6 py-4">
                                  1h
                            </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                      Rdv CEO Hertz
                                </th>
                                <td className="px-6 py-4">
                                      15/03/23
                                 </td>
                                  <td className="px-6 py-4">
                                         15:00
                                  </td>
                                  <td className="px-6 py-4">
                                       Cannes
                                  </td>
                                 <td className="px-6 py-4">
                                          2h
                                 </td>
                             </tr>
                             <tr className="bg-white dark:bg-gray-800">
                                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                       Meeting bilan carbone
                                  </th>
                                 <td className="px-6 py-4">
                                             16/03/23
                                 </td>
                                 <td className="px-6 py-4">
                                        8:00
                                  </td>
                                  <td className="px-6 py-4">
                                       Saint Rémy de Provence
                                  </td>
                                  <td className="px-6 py-4">
                                      3h
                                  </td>
                              </tr>
                              <tr className="bg-white dark:bg-gray-800">
                                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                       Rdv client
                                  </th>
                                 <td className="px-6 py-4">
                                             16/03/23
                                 </td>
                                 <td className="px-6 py-4">
                                        14:00
                                  </td>
                                  <td className="px-6 py-4">
                                         Cannes
                                 </td>
                                  <td className="px-6 py-4">
                                      1h
                                  </td>
                              </tr>
                  </tbody>
              </table>
            </div>


            <div className="pt-10">
              <span className="inline-block w-1/4">
                <img
                    src="/assets/fidelity.png"
                    className="mr-3"/>
              </span>
              <span className="inline-block w-4/5 pl-6">
                  <div className="bg-blue-200">
                    <span className="w-3/4 inline-block">
                        <img
                            src="/assets/rapide.png"
                            className="mr-3 w-full"/>
                      </span>
                      <span className="w-1/4 inline-block">
                          <button className="flex h-12 justify-center items-center w-full bg-black font-semibold text-sm text-white hover:bg-yellowbeeliz">Choisir</button>
                      </span>
                    </div>
                    <div className="bg-blue-200">
                    <img
                        src="/assets/moinscher.png"
                        className="mr-3"/>
                    </div>
                    <div className="bg-blue-200">
                    <img
                        src="/assets/rse.png"
                        className="mr-3"/>
                    </div>
                    <div className="bg-blue-200">
                    <img
                        src="/assets/insolite.png"
                        className="mr-3"/>
                    </div>
                </span>
            </div>


      </div>

    
        
</div>
  )
}