import { Html, Head, Main, NextScript } from 'next/document'
import Footer from './components/footer.js'
import Nav from './components/nav.js'

export default function Document() {
  return (
    <div>
      <Footer/>
      <Nav/>
    </div>
  )
}
