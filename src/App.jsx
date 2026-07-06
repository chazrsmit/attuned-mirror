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

  // quand on click sur un block, ouverture avec toutes les infos

  const [isClicked, setIsClicked] = useState(null)


  // idée cursor où il est écrit: 'dancing is caring', se transforme au hover > 'click' ou bien change de style (passe de outlined à full)

  return (
    <>
    {/* possible nav */}

    {/* main, avec content à gauche et à droite sur ordi - sur mobile, par de gauche ou droite */}
    <section className="main">
      {!isMobile && <LeftDesktop />}
      <Listing isClicked={isClicked} setIsClicked={setIsClicked} />
    </section>

    {/* possible footer */}
    </>
  )
}

export default App
