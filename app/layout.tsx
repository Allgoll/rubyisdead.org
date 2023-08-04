import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import { PropsWithChildren } from 'react'
import { Analytics } from '@vercel/analytics/react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html>
      <head>
        <title>Ruby is Dead</title>
        <meta name="description" content="Stop using it immediately" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Ruby is Dead" />
        <meta property="og:description" content="Stop using it now" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rubyisdead.org/" />
        <meta property="og:image" content="https://rubyisdead.org/sharing.png" />
      </head>
      <body>
        <div className={styles.container}>
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  )
}
