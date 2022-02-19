import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />

      {router.pathname === '/' && <Showcase />}

      <div className='container'>{children}</div>

      <Footer />
    </>
  )
}

Layout.defaultProps = {
  title: 'Пёсики |  Найди себе друга',
  description: 'найти и приютить собаку',
  keywords: 'собака, пес, песик',
}
