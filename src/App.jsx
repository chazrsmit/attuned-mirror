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
  const [isHovered, setIsHovered] = useState(null)


    const events = [
    { 
        id: "sept26mona",
        title: "Attuned & Blackhill Soundsystem for Zone Neutre collective",
        date: "6 September 2026 @Mona",
        upcoming: true,
        content: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Attuned and Blackhill soundsystem are joining forces to raise funds for Zone Neutre collective.

        For this special night, Zone Neutre opens the doors of its new occupation, a self-organised space currently housing 50+ people.

        Beyond occupying empty buildings, Zone Neutre is part of a broader political struggle : fighting for housing rights and the regularisation of undocumented people !

        The collective is currently raising funds to secure safe and stable housing for its members, which enables their political fight.

        Sound system culture is community. Community is resistance. All the benefits from both entry + bars will go to Zone Neutre.
        </>,
        artist1: "Blackhill Crew",
        artist2: "High 'n' Irie",
        artist3: "Elisethere",
        artist4: "Rastacore",
        artist5: "Pneumotrax",
        image: "26mars-lineup-purpledark-pink.png",
        affiche2: "26mars-lineup-purpledark.png",
        element1: "",
        element2: "element-9.png",
        left: "-80px",
        right: "10px",
        top1: "-160px",
        top2: "0px",
        width1: "360px",
        width2: "300px",
        bg: "pink"
     },
    { 
        id: "nov25lav",
        title: "Attuned & Boom Café for Casalina",
        date: "29 November 2025 @LaVallée",
        upcoming: false,
        content: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Attuned is back on november 29th at @lavallee_bxl for a night of bass music and solidarity.

        this time, we’re turning up the volume to support @casalina.bsr , a grassroots social farming project in puglia, italy. more than a farm, it’s a community hub promoting resilience, knowledge-sharing, and conviviality, especially supporting migrants facing harsh living and working conditions.

        this year, Casalina is launching a syntropic grain production, taking an ambitious and sustainable step forward.
        the money raised through the event will help the non-profit to achieve its new objective.

        our lineup of beloved talents will take you on a unique journey through the eclecticism of electronic music, from deep techno to jungle and everything in-between.</>,
        artist1: "Terry",
        artist2: "Bivou4c",
        artist3: "Nidrev",
        artist4: "Ben Richard (VJ)",
        affiche2: "nov25.png",
        image: "nov25 blue.png",
        element1: "",
        element2: "element-blue1.png",
        left: "-40px",
        right: "-30px",
        top1: "0px",
        top2: "-10px",
        width2: "330px",
        bg: "blue"
    },
    { 
        id: "may25lav",
        title: "Attuned & La Vieille Chéchette for Sharefood",
        date: "25 May 2025 @LaVallée",
        upcoming: false,
        content: <><p>texte complémentaire Sharefood</p></>,
        element1: "",
        element2: "element-14.png",
        left: "-40px",
        right: "-30px",
        top1: "0px",
        top2: "0px",
        width2: "360px",
        bg: "pink",
    },
    { 
        id: "nov24lav",
        title: "Attuned & Boom Café for Getting the voice out",
        date: "15 November 2024 @LaVallée",
        upcoming: false,
        content: <><p>texte complémentaire Getting the Voice Out</p></>,
        bg: "blue",
        element2: "element-blue4.png",
        left: "-40px",
        right: "10px",
        top1: "0px",
        top2: "0px",
        width2: "300px",
    },
    { 
        id: "june24zsenne",
        title: "Attuned for 100pap's 3rd bday",
        date: "7 June 2024 @Zsenne Bar",
        upcoming: false,
        content: <><p>texte complémentaire Zsenne</p></>,
        bg: "pink"
    },
    { 
        id: "oct23antidote",
        title: "Attuned & 100pap for La Voix des sans papiers",
        date: "25 October 2023 @L'Antidote",
        upcoming: false,
        content: <><p>texte complémentaire Antidote</p></>,
        bg: "blue"
    },
  ];

  return (
    <>
    {/* possible nav */}

    {/* main, avec content à gauche et à droite sur ordi - sur mobile, par de gauche ou droite */}
    <section className="main">
      {!isMobile && <LeftDesktop events={events} isClicked={isClicked} setIsClicked={setIsClicked} />}
      <Listing events={events} isClicked={isClicked} setIsClicked={setIsClicked} isHovered={isHovered} setIsHovered={setIsHovered} />
    </section>

    {/* possible footer */}
    </>
  )
}

export default App
