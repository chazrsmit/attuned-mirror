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
        content: <><p>texte complémentaire Mona</p></>,
        image: "26mars-lineup-purpledark.png",
        element1: "element-1bis.png",
        element2: "element-9.png",
        left: "20px",
        right: "10px",
        top1: "50px",
        top2: "0px"
     },
    { 
        id: "nov25lav",
        title: "Attuned & Boom Café for Casalina",
        date: "29 November 2025 @LaVallée",
        upcoming: false,
        content: <><p>texte complémentaire LaVallée</p></>
    },
    { 
        id: "may25lav",
        title: "Attuned & La Vieille Chéchette for Sharefood",
        date: "25 May 2025 @LaVallée",
        upcoming: false,
        content: <><p>texte complémentaire Sharefood</p></>
    },
    { 
        id: "nov24lav",
        title: "Attuned & Boom Café for Getting the voice out",
        date: "15 November 2024 @LaVallée",
        upcoming: false,
        content: <><p>texte complémentaire Getting the Voice Out</p></>
    },
    { 
        id: "june24zsenne",
        title: "Attuned for 100pap's 3rd bday",
        date: "7 June 2024 @Zsenne Bar",
        upcoming: false,
        content: <><p>texte complémentaire Zsenne</p></>
    },
    { 
        id: "oct23antidote",
        title: "Attuned & 100pap for La Voix des sans papiers",
        date: "25 October 2023 @L'Antidote",
        upcoming: false,
        content: <><p>texte complémentaire Antidote</p></>
    },
  ];

  return (
    <div className="listing" ref={listingRef}>
      <div ref={contentRef}>
        {events.map((event) => {
          const opened = isClicked === event.id;
          const hovered = isHovered === event.id

          return (
            <div key={event.id} className="block"
                onMouseEnter={() => setIsHovered(hovered ? null : event.id)}
                onMouseLeave={() => setIsHovered(hovered ? null : event.id)}>
              <div
                className="div-titre"
                onClick={() => setIsClicked(opened ? null : event.id)}
              >
                <h2 className="titre">{event.title}</h2>
              </div>

              <div className="infos">
                <p>{event.date}</p>
                {event.upcoming && <p className="upcoming">upcoming</p>}
              </div>

              <AnimatePresence initial={false}>
                {opened && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    {event.content}
                  </motion.div>
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
                    style={{ overflow: "hidden",
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
                <AnimatePresence initial={false}>
                {hovered && (
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ overflow: "hidden",
                        position: "absolute",
                        top: event.top1,
                        left: event.left, 
                        width: "300px" }}
                    className={`element`}
                    src={`/images/${event.element1}`}
                />
                )}
              </AnimatePresence>
                <AnimatePresence initial={false}>
                {hovered && (
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ overflow: "hidden",
                        position: "absolute",
                        top: event.top2,
                        right: event.right, 
                        width: "300px" }}
                    className={`element2`}
                    src={`/images/${event.element2}`}
                />
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}