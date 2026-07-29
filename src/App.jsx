  import { useState, useEffect } from 'react'
  import { useNavigate, Routes, Route, useLocation } from 'react-router-dom'
  import './App.css'
  import Listing from './components/Listing'
  import ListingBis from './components/ListingBis'
  import LeftDesktop from './components/LeftDesktop'
  import Footer from './components/Footer'
  import { motion, AnimatePresence } from "framer-motion";
  import GradualBlur from './components/GradualBlur'
  import CursorTrail from './components/CursorTrail'
  import Focus from './components/Focus'
  import HomeMobile from './components/HomeMobile'
  import BgMobile from './components/BgMobile'

  function App() {

    // pour définir les path/routes
    const navigate = useNavigate()

    // sur mobile ou tablette ou <pas></pas>?
    const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)
    const [isTablet, setIsTablet] = useState(false)
    // check constant de la width du viewport
    useEffect(() => {
      const check = () => {
        const w = window.innerWidth
        setIsMobile(w < 768)
        setIsTablet(w >= 768 && w < 1150)
      }
      check()
      window.addEventListener("resize", check) // lorsqu'on resize le viewport, la fonction check se lance
      return () => window.removeEventListener("resize", check) // on clean up
    }, [])

    const [isClicked, setIsClicked] = useState(null)
    const [isHovered, setIsHovered] = useState(null)

    // are we on the homepage?
    const location = useLocation()
    const isHomepage = location.pathname === "/"


    const events = [
      { 
          id: "sept26mona",
          title: "Attuned & Black Hill Soundsystem for Zone Neutre",
          date: "6 September 2026 @Mona",
          upcoming: true,
          content: <><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Attuned and <a href="https://www.instagram.com/blackhillsoundsystem/" target="blank">Black Hill Soundsystem</a> are joining forces to raise funds for <a href="https://www.facebook.com/p/Collectif-zone-neutre-100071631008694/" target="blank">Zone Neutre</a> collective - a self-organised space currently housing 50+ people, founded on collective ownership, solidarity, mutual aid, and horizontality.
          Beyond occupying empty buildings, Zone Neutre is part of a broader political struggle: fighting for housing rights and the regularisation of undocumented people. The benefits of this night will go to help raising funds to secure safe and stable housing for the members of the collective, helping them in their political fight.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Teaming up with Black Hill, a reggae-dub collective based between Charleroi and Brussels and curator of this lineup, we are hosting for the first time a day event that will take place in the neighbourhood of Jette in the garden of <a href="https://www.toestand.be/fr/mona" target="blank">Mona</a> - a Toestand-run space which organises various socio-cultural activies.
          <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          NB: this event was originally to take place in March in the housing space of Zone Neutre with a different lineup, but due to unforeseen reasons, Zone Neutre wasn't able to host the event in that location. 
          <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          With the precious help of Brasserie de la Senne, Konligo and Froui.</p>
          </>,
          artist1: "Black Hill Soundsystem",
          artist2: "Fatma Soundsystem",
          artist3: "On air Soundsystem",
          image: "/events/060926/poster-light.jpg",
          affiche2: "26mars-lineup-purpledark.png",
          element1: "",
          element2: "element-pink-more7.png",
          left: "-80px",
          right: "10px",
          top1: "-160px",
          top2: "0px",
          topMobile: "0px",
          leftMobile: "300px",
          width1: "370px",
          width2: "270px",
          widthMobile: "200px",
          bg: "pink",
          link: "https://www.youtube.com/watch?v=oECREGGBBHo",
          linktext: "Watch Blackhill Soundsystem play at GIMIC (20.03.26)",
          x: null,
          y: null,
          bgImage: "3.png",
          bgImage2: "3-bis.webp",
          topBg: "-2svh",
          topBgTablet: "-2svh",
          topBgMobile: "2svh",
          leftBg: "16svw",
          leftBgTablet: "12svw",
          leftBgMobile: "6svw",
          bgColor: "yellow"
      },
      { 
          id: "nov25lav",
          title: "Attuned & Boom Café for Casalina",
          date: "29 November 2025 @LaVallée",
          upcoming: false,
          content: <><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For this new event of bass music and solidarity, Attuned teamed up once again with community-run <a href="" target="blank">Boom Café</a> to organise an unforgettable benefit party. We collaborated with LaVallée for a third event in their space, this time turning up the volume to support <a href="" target="blank">Casalina</a> - a grassroots social farming project founded in Brussels with facilities in Puglia, Italy. More than a farm, it’s a community hub promoting resilience, knowledge-sharing, and conviviality, especially supporting migrants facing harsh living and working conditions. The benefits of the event helped Casalina in their launching of a syntropic grain production.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We invited Paris-based artist Bivou4c to join us alongside Attuned resident Terry and Mentality-founder Nidrev.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With the precious help of Brasserie de la Senne, Freddy met curry, le Phare du Kanal, La Flaque (craft beer) and Froui.</p></>,
          artist1: "Terry",
          artist2: "Bivou4c",
          artist3: "Nidrev",
          artist4: "Ben Richard (VJ)",
          affiche2: "nov25.png",
          image: "nov25 blue.png",
          element1: "",
          element2: "element-pink-more.png",
          left: "-40px",
          right: "-30px",
          top1: "0px",
          top2: "-10px",
          topMobile: "0px",
          leftMobile: "300px",
          width2: "270px",
          widthMobile: "200px",
          bg: "pink",
          link: "https://www.youtube.com/watch?v=m7OvvWCjahI",
          linktext: "Watch Nidrev play at GIMIC (28.11.25)",
          bgImage: "7.png",
          bgImage2: "7-bis.webp",
          topBg: "4svh",
          topBgTablet: "15svh",
          topBgMobile: "22svh",
          leftBg: "44svw",
          leftBgTablet: "29svw",
          leftBgMobile: "15svw",
          bgColor: "green",
          imageEvent1: "291125/1.webp",
          imageEvent2: "291125/2.webp",
          imageEvent3: '291125/3.webp',
          imageEvent4: "291125/4.webp",
          imageEvent5: "291125/5.webp"
      },
      { 
          id: "may25lav",
          title: "Attuned & La Vieille Chéchette for Sharefood",
          date: "25 May 2025 @LaVallée",
          upcoming: false,
          content: <><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A second date with LaVallée, with hybrid techno and live Brazilian percussions. We teamed up with community café <a href="https://rencontredescontinents.be/La-Vieille-Chechette.html" target="blank">La Vieille Chéchette</a> to support the non-profit organisation <a href="https://sharefood.be/">Share Food</a> which is committed to fight food waste and social exclusion in Brussels. Every day, a team of volunteers recovers kilos of unsold food from partner stores, to then be given the next day to people in need. The benefits from this event went to the purchase of a new community fridge to store said food.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We invited Marseille-based Margonmars to play a set for this event, along the likes of Brussels-based Sarah Abd Ali and Attuned resident Terry and Brazilian percussions band Tragavasilia.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With the precious help of La Lotterie Nationale, Ney & Partners, Brasserie de la Senne, Froui, Flora and WOW Engineering.</p></>,
          element1: "",
          element2: "element-pink-more4.png",
          left: "-40px",
          right: "-30px",
          top1: "-40px",
          top2: "-50px",
          topMobile: "0px",
          leftMobile: "300px",
          width2: "300px",
          widthMobile: "200px",
          bg: "pink",
          image: "sharefood-2.png",
          affiche2: "26mars-lineup-purpledark.png",
          artist1: "Margonmars",
          artist2: "Sarah Abd Ali",
          artist3: "Terry",
          artist4: "Tragavasilia (live)",
          artist5: "Ben Richard (VJ)",
          link: "https://set79.com/tracklist/soundcloud.com/gimic-radio/attuned-w-terry-gimic-22-may-2025-8",
          linktext: "Listen to Terry play at GIMIC (22.05.25)",
          bgImage: "2.png",
          bgImage2: "2-bis.webp",
          topBg: "2svh",
          topBgTablet: "2svh",
          topBgMobile: "50svh",
          leftBg: "71svw",
          leftBgTablet: "56svw",
          leftBgMobile: "25svw",
          bgColor: 'pink',
          imageEvent1: "250525/1.webp",
          imageEvent2: "250525/2.webp",
          imageEvent3: '250525/3.webp',
          imageEvent4: "250525/4.webp",
          imageEvent5: "250525/5.webp",
      },
      { 
          id: "nov24lav",
          title: "Attuned & Boom Café for Getting the Voice Out",
          date: "15 November 2024 @LaVallée",
          upcoming: false,
          content: <><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For our first time in cultural center LaVallée, we partnered with <a href="https://boomcafe.be/" target="blank">Boom Café</a> to raise funds for <a href="https://www.gettingthevoiceout.org/">Getting the Voice Out</a> collective. The former is a community-run café located in the center of Brussels offering locally-sourced products and cultural activities; the latter is a Belgian collective fighting against borders and all forms of confinement, aiming to raise the voice of people detained in detention centers and to support their struggles. Access to information regarding detention centers being almost nonexistent, the association works to share the detainees' experiences of detention and deportation, as well as document the forms of resistance they organise within these facilities.<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For this techno-focused night, we invited French artist Bambi to DJ alongside three other acts from the local scene - including Attuned-regular STDJ and his genre-hoping musical abilities.<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With the precious help of Konligo, Brasserie de la Senne, Freddy met curry, NEY & Partner and 100PAP.</p></>,
          bg: "pink",
          element2: "element-pink-more2.png",
          left: "-40px",
          right: "10px",
          top1: "0px",
          top2: "0px",
          topMobile: "0px",
          leftMobile: "300px",
          width2: "300px",
          widthMobile: "200px",
          image: "gtvo-blue3.png",
          artist1: "Bambi b2b STDJ",
          artist2: "Moogly b2b Serotonine",
          link: "https://www.youtube.com/watch?v=lw4kZMz0eqY",
          linktext: "Watch Bambi & STDJ play at Kiosk Radio (15.11.25)",
          bgImage: "6.png",
          bgImage2: "6-bis.webp",
          topBg: "32svh",
          topBgTablet: "32svh",
          topBgMobile: "74svh",
          leftBg: "20svw",
          leftBgTablet: "1svw",
          leftBgMobile: "8svw",
          bgColor: "blue",
          imageEvent1: "151124/1.webp",
          imageEvent2: "151124/2.webp",
          imageEvent3: '151124/3.webp',
          imageEvent4: "151124/4.webp",
          imageEvent5: "151124/5.webp",
          imageEvent6: "151124/6.webp"
      },
      { 
          id: "june24zsenne",
          title: "Attuned for 100PAP's 7th bday",
          date: "8 June 2024 @Zenne Bar",
          upcoming: false,
          content: <><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We threw another event in collaboration with <a href="https://100pap.be/" target="blank">100PAP</a> in honour of their 7th birthday, aiming to contribute again to the 100.000€ raised in the 7 years since their beginnings. This time in the neighbourhood of Brussels North, close to Tour and Taxi in Zenne Bar where we got to enjoy the sun and the surrounding green fields.<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A day of dub, hip hop, bass, global sounds, and percussions.<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With the precious help of Brasserie de la Senne.</p></>,
          bg: "pink",
          element2: "element-pink-more5.png",
          left: "-40px",
          right: "70px",
          top1: "0px",
          top2: "10px",
          topMobile: "0px",
          leftMobile: "300px",
          width2: "340px",
          widthMobile: "200px",
          image: "7th100pap.png",
          artist1: "STDJ",
          artist2: "Meex",
          artist3: "Tropical Djipsies",
          bgImage: "4.png",
          bgImage2: "4-bis.webp",
          topBg: "36svh",
          topBgTablet: "36svh",
          topBgMobile: "99vh",
          leftBg: "48svw",
          leftBgTablet: "35svw",
          leftBgMobile: "10svw",
          bgColor: "yellow"
      },
      { 
          id: "oct23antidote",
          title: "Attuned for Bulle",
          date: "21 October 2023 @L'Antidote (La Fabriek)",
          upcoming: false,
          content: <><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For its second edition, Attuned settled once again at L'Antidote (now known as La Fabriek) to raise funds for <a href="https://www.labulle.org/" target="blank">Bulle</a> - a free mobile laundry service for people experiencing homelessness, stopping in a different location everyday accross specific neighbourhoods in Brussels. Beyond that, it also acts as an effective social space allowing them to break out of isolation and connect with other people - offering free coffee, milk, tea, biscuits, and fruit to provide a warm and welcoming space to relax.<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This time, we had a 100% Brussels lineup, with some of the most active artists in the underground music scene. The music was centered on UK bass music with a masterful rotation of jungle, drum 'n' bass and dubstep.<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With the precious help of Konligo, Brasserie de la Senne, L'Amère à Boire and 100PAP.</p></>,
          bg: "pink",
          element2: "element-pink-more3.png",
          left: "-40px",
          right: "0px",
          top1: "0px",
          top2: "-10px",
          topMobile: "0px",
          leftMobile: "300px",
          width2: "290px",
          widthMobile: "200px",
          image: "bulle-2.png",
          link: "https://soundcloud.com/kioskradio/attuned-w-k-ma-kiosk-radio-21",
          linktext: "Listen to Kōma playing at Kiosk Radio (21.10.23)",
          artist1: "La Dame",
          artist2: "Kōma",
          artist3: "STDJ",
          bgImage: "5.png",
          bgImage2: "5-bis.webp",
          topBg: "44svh",
          topBgTablet: "45svh",
          topBgMobile: "119vh",
          leftBg: "72svw",
          leftBgTablet: "60svw",
          leftBgMobile: "34vw",
          bgColor: "blue"
      },
          { 
          id: "may13antidote",
          title: "Attuned for 100PAP's 6th bday",
          date: "13 May 2023 @L'Antidote (La Fabriek)",
          upcoming: false,
          content: <><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Attuned's first ever edition was organised both for and in partnership with <a href="https://100pap.be/" target="blank">100PAP</a> - a Brussels-based non-profit organisation that supports collectives of undocumented people by fighting inadequate and unstable housing conditions through the sale of beers and lemonades. The benefits for this event were used to pay for rent, utilities, insurance, and renovation expenses of several collectives.<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inviting Polish artist Daisy Cutter for her first gig ever in Brussels, the artistic programmation reflected Attuned's ambition to showcase emerging local and international talent.<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With the help of La Voix des Sans-Papiers and Brasserie de la Senne.</p></>,
          bg: "pink",
          element2: "element-pink-more6.png",
          left: "-40px",
          right: "40px",
          top1: "0px",
          top2: "10px",
          topMobile: "0px",
          leftMobile: "300px",
          width2: "270px",
          widthMobile: "200px",
          image: "6th100pap.png",
          artist1: "Daisy Cutter",
          artist2: "Melissa Juice",
          artist3: "Rafael Aragon",
          artist4: "Martin Daniel",
          link: "https://www.youtube.com/watch?v=qmaKOMYJIbI",
          linktext: "Watch Daisy Cutter play at Kiosk Radio (13.05.2023)",
          bgImage: "1.png",
          bgImage2: "1-bis.webp",
          topBg: "62svh",
          topBgTablet: "65vh",
          topBgMobile: "143vh",
          leftBg: "34svw",
          leftBgTablet: "44svw",
          leftBgMobile: "4vw",
          bgColor: "pink",
          imageEvent1: "130523/image023.webp",
          imageEvent2: "130523/image031.webp",
          imageEvent3: '130523/image003.webp',
          imageEvent4: "130523/image013.webp"
      }
    ];

    // logique éléments graphiques
    const [floatingGraphic, setFloatingGraphic] = useState(null);

    // faire apparaire listing en liste (vertical)
    const [listingOn, setListingOn] = useState(false)

    const handleBtnClick = (e) => {
      if (!listingOn) {
              setListingOn(true)
      }
      else {
        setListingOn(false)
      }
    }

    const [titleHovered, setTitleHovered] = useState(null)

    return (
      <>
      {isMobile && <BgMobile events={events} />}
      {!isMobile && !isTablet && <CursorTrail />}
      {/* {isMobile && <Footer />} */}

      <section className="main">
        {!isMobile && (
            <LeftDesktop
                events={events}
                isClicked={isClicked}
                setIsClicked={setIsClicked}
                listingOn={listingOn}
                isHomepage={isHomepage}
                isTablet={isTablet}
            />
        )}
      {/* Définition des routes (main page "/" et pages focus) */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element=
              {
                isMobile ? (
                  <HomeMobile />
                )
                :
                (
                  <ListingBis
                  events={events}
                  isClicked={isClicked}
                  setIsClicked={setIsClicked}
                  isHovered={isHovered}
                  setIsHovered={setIsHovered}
                  isMobile={isMobile}
                  isTablet={isTablet}
                  setFloatingGraphic={setFloatingGraphic}
                  titleHovered={titleHovered}
                  setTitleHovered={setTitleHovered}
                />
                )
              }
            // {
            //   listingOn ? (
            //     <Listing
            //       events={events}
            //       isClicked={isClicked}
            //       setIsClicked={setIsClicked}
            //       isHovered={isHovered}
            //       setIsHovered={setIsHovered}
            //       isMobile={isMobile}
            //       isTablet={isTablet}
            //       setFloatingGraphic={setFloatingGraphic}
            //       titleHovered={titleHovered}
            //       setTitleHovered={setTitleHovered}
            //     />
            //   ) : (
            //     <ListingBis
            //       events={events}
            //       isClicked={isClicked}
            //       setIsClicked={setIsClicked}
            //       isHovered={isHovered}
            //       setIsHovered={setIsHovered}
            //       isMobile={isMobile}
            //       isTablet={isTablet}
            //       setFloatingGraphic={setFloatingGraphic}
            //       titleHovered={titleHovered}
            //       setTitleHovered={setTitleHovered}
            //     />
            //   )
            // }
          />
          <Route
            path="/event/:id"
            element={<Focus events={events} setIsClicked={setIsClicked} isMobile={isMobile} />}
          />
        </Routes>
      </AnimatePresence>
     </section>

      {/* <section className="main">
        {!isMobile && <LeftDesktop events={events} isClicked={isClicked} setIsClicked={setIsClicked} listingOn={listingOn} />}
        {listingOn &&
        <AnimatePresence mode="wait">
          <Listing events={events} isClicked={isClicked} setIsClicked={setIsClicked} isHovered={isHovered} setIsHovered={setIsHovered} isMobile={isMobile} setFloatingGraphic={setFloatingGraphic} titleHovered={titleHovered} setTitleHovered={setTitleHovered} />
        </AnimatePresence>
        }
        {!listingOn && 
        <AnimatePresence mode="wait">
            <ListingBis events={events} isClicked={isClicked} setIsClicked={setIsClicked} isHovered={isHovered} setIsHovered={setIsHovered} isMobile={isMobile} setFloatingGraphic={setFloatingGraphic} titleHovered={titleHovered} setTitleHovered={setTitleHovered} />
        </AnimatePresence>
        }
      </section> */}
{/* 
      <AnimatePresence initial={false} mode="wait">
        {floatingGraphic && (
        <motion.img
            key={floatingGraphic.src}
            drag
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}  
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden",
                position: "absolute",
                top:  `${floatingGraphic.y}vh`,
                left:`${floatingGraphic.x}vw`,
                width: isMobile? floatingGraphic.widthMobile : floatingGraphic.width }}
            className={`element2`}
            src={`${import.meta.env.BASE_URL}/images/${floatingGraphic.src}`}
        />
        )}
      </AnimatePresence> */}

      {/* <div className="btn-listing-change" onClick={()=>handleBtnClick()} style={{position:"absolute", inset: "0"}}>
        <button>click</button>
      </div> */}

    {!listingOn &&
    isHomepage &&
      <AnimatePresence mode="wait">
        {titleHovered && (
          <motion.div
            key={titleHovered}
            className="title-big"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h1>{titleHovered}</h1>
          </motion.div>
        )}
      </AnimatePresence>
    }



        {/* buttons */}
        {/* <div className="btn-collaborate">
          <button className="">Wanna collaborate?</button>
        </div> */}

      </>
    )
  }

  export default App
