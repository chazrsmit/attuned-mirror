import { useState, useEffect } from 'react'
import './App.css'
import Listing from './components/Listing'
import LeftDesktop from './components/LeftDesktop'
import Footer from './components/Footer'
import { motion, AnimatePresence } from "framer-motion";

function App() {

  // sur mobile ou non?
  const [isMobile, setIsMobile] = useState(false)
  // check constant de la width du viewport
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

  const [isClicked, setIsClicked] = useState(null)
  const [isHovered, setIsHovered] = useState(null)


  const events = [
    { 
        id: "sept26mona",
        title: "Attuned & Blackhill Soundsystem for Zone Neutre collective",
        date: "6 September 2026 @Mona",
        upcoming: true,
        content: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Attuned and <a href="https://www.instagram.com/blackhillsoundsystem/" target="blank">Blackhill Soundsystem</a> are joining forces to raise funds for <a href="https://www.facebook.com/p/Collectif-zone-neutre-100071631008694/" target="blank">Zone Neutre</a> collective - a self-organised space currently housing 50+ people, founded on collective ownership, solidarity, mutual aid, and horizontality.
        Beyond occupying empty buildings, Zone Neutre is part of a broader political struggle: fighting for housing rights and the regularisation of undocumented people. The benefits of this night will go to help raising funds to secure safe and stable housing for the members of the collective, helping them in their political fight.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Teaming up with Blackhill, a reggae-dub collective based between Charleroi and Brussels and curator of this lineup, we are hosting for the first time a day event that will take place in the garden of <a href="https://www.toestand.be/fr/mona" target="blank">Mona</a> - a Toestand-run space which organises various socio-cultural activies.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        With the precious help of Brasserie de la Senne, Konligo and Froui.
        </>,
        artist1: "Blackhill Crew",
        artist2: "High 'n' Irie",
        artist3: "Elisethere",
        artist4: "Rastacore",
        artist5: "Pneumotrax",
        image: "blackhill.png",
        affiche2: "26mars-lineup-purpledark.png",
        element1: "",
        element2: "element-9.png",
        left: "-80px",
        right: "10px",
        top1: "-160px",
        top2: "0px",
        width1: "370px",
        width2: "320px",
        bg: "pink",
        link: "https://www.youtube.com/watch?v=oECREGGBBHo",
        linktext: "Watch Blackhill Soundsystem play at GIMIC (20.03.26)",
        x: null,
        y: null
     },
    { 
        id: "nov25lav",
        title: "Attuned & Boom Café for Casalina",
        date: "29 November 2025 @LaVallée",
        upcoming: false,
        content: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For this new event of bass music and solidarity, Attuned teamed up once again with community-run <a href="" target="blank">Boom Café</a> to organise an unforgettable benefit party. We collaborated with LaVallée for a third event in their space, this time turning up the volume to support <a href="" target="blank">Casalina</a> - a grassroots social farming project founded in Brussels with facilities in Puglia, Italy. More than a farm, it’s a community hub promoting resilience, knowledge-sharing, and conviviality, especially supporting migrants facing harsh living and working conditions. The benefits of the event helped Casalina in their launching of a syntropic grain production.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We invited Paris-based artist Bivou4c to join us alongside Attuned resident Terry and Mentality-founder Nidrev.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With the precious help of Brasserie de la Senne, Freddy met curry, le Phare du Kanal, La Flaque (craft beer) and Froui.</>,
        artist1: "Terry",
        artist2: "Bivou4c",
        artist3: "Nidrev",
        artist4: "Ben Richard (VJ)",
        affiche2: "nov25.png",
        image: "nov25 blue.png",
        element1: "",
        element2: "element-blue6.png",
        left: "-40px",
        right: "-30px",
        top1: "0px",
        top2: "-10px",
        width2: "270px",
        bg: "blue",
        link: "https://www.youtube.com/watch?v=m7OvvWCjahI",
        linktext: "Watch Nidrev play at GIMIC (28.11.25)"
    },
    { 
        id: "may25lav",
        title: "Attuned & La Vieille Chéchette for Sharefood",
        date: "25 May 2025 @LaVallée",
        upcoming: false,
        content: <><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A second date with LaVallée, with hybrid techno and live Brazilian percussions. We teamed up with community café <a href="https://rencontredescontinents.be/La-Vieille-Chechette.html" target="blank">La Vieille Chéchette</a> to support the non-profit organisation <a href="https://sharefood.be/">Share Food</a> which is committed to fight food waste and social exclusion in Brussels. Every day, a team of volunteers recovers kilos of unsold food from partner stores, that will then be given the next day to people in need. The benefits from this event went to the purchase of a new community fridge to store said food.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We invited Marseille-based Margonmars to play a set for this event, along the likes of Brussels-based Sarah Abd Ali and Attuned resident Terry and Brazilian percussions band Tragavasilia.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With the precious help of La Lotterie Nationale, Ney & Partners, Brasserie de la Senne, Froui, Flora and WOW Engineering.</p></>,
        element1: "",
        element2: "element-14.png",
        left: "-40px",
        right: "-30px",
        top1: "-40px",
        top2: "-50px",
        width2: "400px",
        bg: "pink",
        image: "sharefood-2.png",
        affiche2: "26mars-lineup-purpledark.png",
        artist1: "Margonmars",
        artist2: "Sarah Abd Ali",
        artist3: "Terry",
        artist4: "Tragavasilia (live)",
        artist5: "Ben Richard (VJ)",
        link: "https://set79.com/tracklist/soundcloud.com/gimic-radio/attuned-w-terry-gimic-22-may-2025-8",
        linktext: "Listen to Terry play at GIMIC (22.05.25)"
    },
    { 
        id: "nov24lav",
        title: "Attuned & Boom Café for Getting the Voice Out",
        date: "15 November 2024 @LaVallée",
        upcoming: false,
        content: <><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For our first time in cultural center LaVallée, we partnered with <a href="https://boomcafe.be/" target="blank">Boom Café</a> to raise funds for <a href="https://www.gettingthevoiceout.org/">Getting the Voice Out</a> collective. The former is a community-run café located in the center of Brussels offering locally-sourced products and cultural activities; the latter is a Belgian collective fighting against borders and all forms of confinement, aiming to raise the voice of people detained in detention centers and to support their struggles. Access to information regarding detention centers being almost nonexistent, the association works to share the detainees' experiences of detention and deportation, as well as document the forms of resistance they organize within these facilities.<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For this techno-focused night, we invited French artist Bambi to DJ alongside three other acts from the local scene - including Attuned-regular STDJ and his genre-hoping musical abilities.<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With the precious help of Konligo, Brasserie de la Senne, Freddy met curry, NEY & Partner and 100PAP.</p></>,
        bg: "blue",
        element2: "element-blue9.png",
        left: "-40px",
        right: "10px",
        top1: "0px",
        top2: "0px",
        width2: "300px",
        image: "gtvo-blue3.png",
        artist1: "Bambi b2b STDJ",
        artist2: "Moogly b2b Serotonine",
        link: "https://www.youtube.com/watch?v=lw4kZMz0eqY",
        linktext: "Watch Bambi & STDJ play at Kiosk Radio (15.11.25)"
    },
    { 
        id: "june24zsenne",
        title: "Attuned for 100pap's 7th bday",
        date: "8 June 2024 @Zenne Bar",
        upcoming: false,
        content: <><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We threw another event in collaboration with <a href="https://100pap.be/" target="blank">100PAP</a> in honour of their 7th birthday, aiming to contribute again to the 100.000€ raised in the 7 years since their beginnings. This time in the neighbourhood of Brussels North, close to Tour and Taxi in Zenne Bar where we got to enjoy the sun and the surrounding green fields.<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A day of dub, hip hop, bass, global sounds, and percussions.<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With the precious help of Brasserie de la Senne.</p></>,
        bg: "pink",
        element2: "element-pink6.png",
        left: "-40px",
        right: "70px",
        top1: "0px",
        top2: "10px",
        width2: "230px",
        image: "7th100pap.png",
        artist1: "STDJ",
        artist2: "Meex",
        artist3: "Tropical Djipsies"
    },
    { 
        id: "oct23antidote",
        title: "Attuned for Bulle",
        date: "21 October 2023 @L'Antidote (La Fabriek)",
        upcoming: false,
        content: <><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For its second edition, Attuned settled once again at L'Antidote (now known as La Fabriek) to raise funds for <a href="https://www.labulle.org/" target="blank">Bulle</a> - a free mobile laundry service for people experiencing homelessness, stopping in a different location everyday accross specific neighbourhoods in Brussels. Beyond that, it also acts as an effective social space allowing them to break out of isolation and connect with other people - offering free coffee, milk, tea, biscuits, and fruit to provide a warm and welcoming space to relax.<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This time, we had a 100% Brussels lineup, with some of the most active artists in the underground music scene. The music was centered on UK bass music with a masterful rotation of jungle, drum 'n' bass and dubstep.<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With the precious help of Konligo, Brasserie de la Senne, L'Amère à Boire and 100PAP.</p></>,
        bg: "blue",
        element2: "element-blue11.png",
        left: "-40px",
        right: "0px",
        top1: "0px",
        top2: "-10px",
        width2: "290px",
        image: "bulle-2.png",
        link: "https://soundcloud.com/kioskradio/attuned-w-k-ma-kiosk-radio-21",
        linktext: "Listen to Kōma playing at Kiosk Radio (21.10.23)",
        artist1: "La Dame",
        artist2: "Kōma",
        artist3: "STDJ"
    },
        { 
        id: "may13antidote",
        title: "Attuned for 100pap's 6th bday",
        date: "13 May 2023 @L'Antidote (La Fabriek)",
        upcoming: false,
        content: <><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Attuned's first ever edition was organised both for and in partnership with <a href="https://100pap.be/" target="blank">100PAP</a> - a Brussels-based non-profit organisation that supports collectives of undocumented people by fighting inadequate and unstable housing conditions through the sale of beers and lemonades. The benefits for this event were used to pay for rent, utilities, insurance, and renovation expenses of several collectives.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inviting Polish artist Daisy Cutter for her first gig ever in Brussels, the artistic programmation reflected Attuned's ambition to showcase emerging local and international talent.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With the help of La Voix des Sans-Papiers and Brasserie de la Senne.</p></>,
        bg: "pink",
        element2: "element-pink5.png",
        left: "-40px",
        right: "40px",
        top1: "0px",
        top2: "10px",
        width2: "250px",
        image: "6th100pap.png",
        artist1: "Daisy Cutter",
        artist2: "Melissa Juice",
        artist3: "Rafael Aragon",
        artist4: "Martin Daniel",
        link: "https://www.youtube.com/watch?v=qmaKOMYJIbI",
        linktext: "Watch Daisy Cutter play at Kiosk Radio (13.05.2023)"
    }
  ];

  // logique éléments graphiques
  const [floatingGraphic, setFloatingGraphic] = useState(null);

  return (
    <>
    {/* possible nav */}
        {/* possible footer */}
    {isMobile && <Footer /> }

    {/* main, avec content à gauche et à droite sur ordi - sur mobile, par de gauche ou droite */}
    <section className="main">
      {!isMobile && <LeftDesktop events={events} isClicked={isClicked} setIsClicked={setIsClicked} />}
      <Listing events={events} isClicked={isClicked} setIsClicked={setIsClicked} isHovered={isHovered} setIsHovered={setIsHovered} isMobile={isMobile} setFloatingGraphic={setFloatingGraphic} />
    </section>

    <AnimatePresence initial={false} mode="wait">
      {isHovered && (
      <motion.img
          key={floatingGraphic.src} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          style={{ overflow: "hidden",
              position: "absolute",
              top: `${floatingGraphic.y}vh`,
              left: `${floatingGraphic.x}vw`,
              width: floatingGraphic.width }}
          className={`element2`}
          src={`${import.meta.env.BASE_URL}/images/${floatingGraphic.src}`}
      />
      )}
    </AnimatePresence>

    </>
  )
}

export default App
