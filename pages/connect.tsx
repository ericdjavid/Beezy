import React from 'react'

export default function connect() {
  return (

    
<div
  className="grid h-screen w-screen place-items-center px-4 text-sm font-medium bg-blurbeeliz bg-cover"
>
  <div className="w-full max-w-sm rounded-lg bg-slate-700/30 shadow">




    <div className="p-4 md:p-5 lg:p-6 text-gray-700 bg-gray-300 rounded-md shadow-2xl">


      <h1 className="font-bold text-2xl text-center">Se connecter</h1>
      <form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" action="">
        <label className="font-semibold text-xs">Username or Email</label>
        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 focus:ring-yellowbeeliz hover:border-yellowbeeliz" type="text"></input>
        <label className="font-semibold text-xs mt-3">Password</label>
        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 focus:ring-yellowbeeliz hover:border-yellowbeeliz"type="password"></input>
        <button className="flex items-center justify-center h-12 px-6 w-64 bg-black mt-8 rounded font-semibold text-sm text-white hover:bg-yellowbeeliz">Se connecter</button>
        <div className="flex mt-6 justify-center text-xs">
          <a className="text-gray-400 underline hover:text-yellowbeeliz" href="#">Mot de passe oublié</a>
        </div>
      </form>


    </div>






  </div>
</div>
  )
}
