import { useState, useEffect } from 'react'
import './App.css'
import Listing from './components/Listing'
import LeftDesktop from './components/LeftDesktop'

function App() {

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true)
      }
      else {
        setIsMobile(false)
      }
    }
    check()
    window.addEventListener("resize", check) // lorsqu'on resize le viewport, la fonction check se lance
    return () => window.removeEventListener("resize", check) // on clean up
  }, [])
  // lorsqu'on resize, actualiser


  return (
    <>
    {/* possible nav */}

    {/* main, avec content à gauche et à droite sur ordi - sur mobile, par de gauche ou droite */}
    <section className="main">
      {!isMobile && <LeftDesktop />}
      <Listing />
    </section>

    {/* possible footer */}
    </>
  )
}

export default App
