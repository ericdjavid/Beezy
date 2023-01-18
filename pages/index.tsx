import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import Pay from '../components/Pay'
import FooterProj from '../components/Footer'
import FeatureExample from '../components/Feature'
import Team from '../components/Team'
import Link from 'next/link'

// qd tu veux passer de la donner au rendu statique, utiliser getStaticProps
// ne s'execute que lorsqu'on build l'app, jamais ne sera affiché côté client
// faire du node.js ici
export async function getStaticProps() {

  const data = await import(`../data/vocabulary.json`)
  const array = data.vocabulary

  return {
    props: {
      array
    }
  }
}


export default function Home(props: any) {

  console.log(props)
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        {/* Permet d'avoir l'écran bien zoomé à 100% sur telephone */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Beeliz - Home</title>
      </Head>
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
        </svg>
      </div>
      <Navbar />
      <main>
        <div className="relative px-6 lg:px-8, bg-blurbeeliz">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                Beeliz, le générateur de voyages professionnels<span className='text-2xl'>️</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                Planifiez vos voyages pro en toute simplicité
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <Link
                    href="/cours"
                    className="inline-block rounded-lg bg-black px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-black hover:bg-stonebeeliz hover:ring-stonebeeliz"
                  >
                    Connexion{' '}
                    <span className="text-yellowbeeliz" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                  { <a
                    href="#"
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                  >
                    Voir les abonnements{' '}
                    <span className="text-gray-400" aria-hidden="true">
                      &rarr;
                    </span>
                  </a> 
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FeatureExample />
      <Team />
      <Pay />
      <FooterProj />
      {/* <MyAlert/> */}
    </>
  )
}
