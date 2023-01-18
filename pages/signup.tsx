import React from 'react'

export default function signup() {
  return (

    
<div
  className="grid h-screen w-screen place-items-center px-4 text-sm font-medium bg-blurbeeliz bg-cover"
>
  <div className="w-full max-w-sm rounded-lg bg-slate-700/30 shadow">




    <div className="p-4 md:p-5 lg:p-6 text-gray-700 bg-gray-300 rounded-md shadow-2xl">


      <h1 className="font-bold text-2xl text-center">Créer son compte</h1>
        <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Prénom
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-yellowbeeliz hover:border-yellowbeeliz" id="grid-first-name" type="text" placeholder="Jane"></input>
                    <p className="text-red-500 text-xs italic">  Renseigner ce champ.</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Nom
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:ring-yellowbeeliz hover:border-yellowbeeliz" id="grid-last-name" type="text" placeholder="Doe"></input>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Mot de passe
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-yellowbeeliz hover:border-yellowbeeliz" id="grid-password" type="password" placeholder="******************"></input>
                    <p className="text-gray-600 text-xs italic">  Minimum 8 charactères.</p>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Poste
                    </label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:ring-yellowbeeliz hover:border-yellowbeeliz" id="grid-state">
                            <option>Commercial</option>
                            <option>Chargé de clientèle</option>
                            <option>Chef de produit</option>
                            <option>Manager</option>
                            <option>Chef de projet</option>
                            <option>Autre</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Département
                    </label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:ring-yellowbeeliz hover:border-yellowbeeliz" id="grid-state">
                            <option>Comptabilité</option>
                            <option>Merchandising</option>
                            <option>Communication</option>
                            <option>Ressources Humaines</option>
                            <option>Sales & Marketing</option>
                            <option>Relation Client</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <button className="flex items-center w-full justify-center h-12 px-6 bg-black mt-8 rounded font-semibold text-lg text-white hover:bg-yellowbeeliz">Valider</button>
                </div>
            </div>
        </form>
    </div>
  </div>
</div>
  )
}