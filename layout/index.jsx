import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

const Layout = (props) => {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-full min-h-screen">
      <Header />

      {props.children}

      <Footer />
    </div>
  )
}

export default Layout