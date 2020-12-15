import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>abombado Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header text="orale" />
        <p className="description">
          Get started by editing clicking our contact page:
          <Link href="/contact">
            <a>Click here for contact!!</a>
          </Link>
        </p>
      </main>

      <Footer />
    </div>
  )
}
