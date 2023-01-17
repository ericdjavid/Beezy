import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Synchronisez votre agenda',
    description:
      'Grâce à la technologie Beeliz, vous pouvez synchronisez votre agenda sur notre plateforme, et ajouter vos rendez-vous facilement',
    icon: GlobeAltIcon,
  },
  {
    name: 'Réservez en quelques clics',
    description:
      'Fini les tableurs excel pour planifier vos déplacments. Avec Beeliz, organiser ses voyages est incroyanlement rapide !',
    icon: ScaleIcon,
  },
  {
    name: 'Générez des bundles voyage personnalisables',
    description:
      'Nous choisissons pour vous les solutions les plus avantageuses en fonction de vos habitudes. Besoin de modifier une étape du trajet ? C\'est possible et très simple à faire.',
    icon: BoltIcon,
  },
  {
    name: 'Conservez une vue d\'ensemble sur vos déplacements à venir',
    description:
      'Planifiez vos déplacements en avance et gardez un oeil sur vos prochaines destinations grâce à notre carte interactive.',
    icon: DevicePhoneMobileIcon,
  },
]

export default function FeatureExample() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40 w-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          {/*
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">Transactions</h2>
  */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Un voyage sur mesure en quelques minutes</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Réservez en quelques clics, obtenez une seule facture et gagnez du temps.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}