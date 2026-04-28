import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Industrial System — Landing</title>
        <meta name="description" content="Industrial control and monitoring solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Features />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
