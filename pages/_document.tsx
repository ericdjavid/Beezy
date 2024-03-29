import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* eslint-disable-next-line @next/next/no-sync-scripts, @next/next/no-sync-scripts */}
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </Html>
  )
}
