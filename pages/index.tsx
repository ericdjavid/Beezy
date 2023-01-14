import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar'
import { Alert } from 'flowbite-react'
import MyAlert from '../components/Navbar/alert'
import Pay from '../components/Pay'
import FooterProj from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <> 
      <Navbar/>
      <div className="container min-w-full h-64 bg m-auto p-5 flex justify-center align-middle">
        <div className='m-auto w-1/3'>
          <h1 className='text-center font-semibold leading-10 sm:text-3xl lg:text-4xl'>
            Planifiez vos voyages pro en toute simplicité
          </h1>
        </div>
        </div>
       <Pay/>
       <FooterProj/>
      {/* <MyAlert/> */}
    </>
  )
}
