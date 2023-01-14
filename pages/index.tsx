import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='bg-white dark:bg-slate-800 flex text-xl p-10 '>

        <h1 className='basis-1/4'>Beeliz</h1>
        <div className='basis-2/4'></div>
        <div className='basis-1/4 text-right flex text-sm gap-10'>

          <div>
          </div>
          <Link href={"/connect"}>
            Connection
          </Link>

          <Link href={"/subscribe"}>
            Inscription
          </Link>
        </div>
      </div>
      <div className="container min-w-full h-64 bg m-auto p-5 flex justify-center align-middle">
        <div className='m-auto w-1/3'>
          <h1 className='text-center text-4xl font-semibold leading-10'>
            Planifiez vos voyages pro en toute simplicité
          </h1>
        </div>
  
        </div>

    </>
  )
}
