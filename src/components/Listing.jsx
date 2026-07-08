import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "./Listing.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Listing({ isClicked, setIsClicked, isHovered, setIsHovered }) {
  const listingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: listingRef.current,
      content: contentRef.current,
      duration: 1,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
        image: "nov25.png",
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
    <div className="listing" ref={listingRef}>
      <div ref={contentRef}>
        {events.map((event) => {
          const opened = isClicked === event.id;
          const hovered = isHovered === event.id

          return (
            <div key={event.id} className={`block ${hovered || opened ? event.bg : null}`}
                onMouseEnter={() => setIsHovered(hovered ? null : event.id)}
                onMouseLeave={() => setIsHovered(hovered ? null : event.id)}>
              <div
                className="div-titre"
                onClick={() => setIsClicked(opened ? null : event.id)}
              >
                <h2 className={`titre ${hovered || opened ? event.bg : null}`}>{event.title}</h2>
              </div>

              <div className="infos">
                <p className="date">{event.date}</p>
                {event.upcoming && <p className="upcoming">upcoming</p>}
              </div>

              <AnimatePresence initial={false}>
                {opened && (
                    <>
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="content"
                  >
                    <div className="description-wrapper">
                        <div className="description">
                            <p>{event.content}</p>
                        </div>
                    </div>
                    <div className={`lineup ${opened ? event.bg : null}`}>
                        <br/>
                        <br/>
                        <p>{event.artist1}</p>
                        <p>{event.artist2}</p>
                        <p>{event.artist3}</p>
                        <p>{event.artist4}</p>
                        <p>{event?.artist5}</p>
                    </div>
                  </motion.div>
                {/* <motion.div
                    key="content2"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    style={{  }}
                    className="content2"
                  >
                    <div className={`lineup ${opened ? event.bg : null}`}>
                        <br/>
                        <br/>
                        <p>{event.artist1}</p>
                        <p>{event.artist2}</p>
                        <p>{event.artist3}</p>
                        <p>{event.artist4}</p>
                        <p>{event?.artist5}</p>
                    </div>
                  </motion.div> */}
                  </>
                )}
              </AnimatePresence>

              {/* affiche on hover */}
              <AnimatePresence initial={false}>
                {hovered && (
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0}}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ 
                        position: "absolute",
                        top: "200px",
                        right: "20px", 
                        width: "300px" }}
                    className={`affiche ${opened ? 'clicked' : null}`}
                    src={`/images/${event.image}`}
                />
                )}
              </AnimatePresence>

              {/* éléments graphiques */}
                {/* <AnimatePresence initial={false}>
                {hovered && event.element1 && (
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ overflow: "hidden",
                        position: "absolute",
                        top: event.top1,
                        left: event.left, 
                        width: event.width1 }}
                    className={`element`}
                    src={`/images/${event?.element1}`}
                />
                )}
              </AnimatePresence>
                <AnimatePresence initial={false}>
                {hovered && event.element2 && (
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ overflow: "hidden",
                        position: "absolute",
                        top: event.top2,
                        right: event.right, 
                        width: event.width2 }}
                    className={`element2`}
                    src={`/images/${event?.element2}`}
                />
                )}
              </AnimatePresence> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}