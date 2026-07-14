import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import "./Listing.css";
import { motion, AnimatePresence } from "framer-motion";


export default function Listing({ events, isClicked, setIsClicked, isHovered, setIsHovered, titleHovered, setTitleHovered, isMobile, setFloatingGraphic }) {
  const listingRef = useRef(null)
  const contentRef = useRef(null)
  const positionsRef = useRef({})

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


  return (
    <div className="listing" ref={listingRef}>
      <div ref={contentRef}>
        {events.map((event) => {
          const opened = isClicked === event.id
          const hovered = isHovered === event.id
          const title = titleHovered === event.id

          return (
            <div key={event.id} className={`block ${hovered || opened ? event.bg : null}`}
            onMouseEnter={() => {
              setIsHovered(event.id)

              setFloatingGraphic(prev => {
                if (prev?.id === event.id) return prev  // already showing this block's image — leave position untouched
                return {
                  id: event.id,
                  src: event.element2,
                  width: event.width2,
                  x: Math.random() * 70,
                  y: Math.random() * 66
                }
              })

              setTitleHovered(event.id)
            }}
            onMouseLeave={() => {
              setIsHovered(prev => (prev === event.id ? null : prev))
              setTitleHovered(prev => (prev === event.id ? null : prev))
              // floatingGraphic is untouched here on purpose — it stays sticky
            }}    
            >
              <div
                className="div-titre"
                onClick={() => setIsClicked(opened ? null : event.id)}
              >
                <h2 className={`titre ${title || opened ? event.bg : null}`}>{event.title}</h2>
              </div>

              <div className="infos">
                <p className="date">{event.date}</p>
                {/* upcoming */}
                <AnimatePresence mode="wait">
                  {event.upcoming && <motion.p
                                      key="upcoming"
                                      className="upcoming"
                                      initial={{
                                          opacity: 0,
                                          filter: "blur(6px)",
                                          x: 20
                                      }}
                                      animate={{
                                          opacity: 1,
                                          filter: "blur(0px)",
                                          x: 0
                                      }}
                                      exit={{
                                          opacity: 0,
                                          filter: "blur(6px)",
                                          x: -20
                                      }}
                                      transition={{
                                          duration: 0.3,
                                          ease: "easeInOut"
                                      }}
                                      >
                                        upcoming
                                      </motion.p>
                  }
                </AnimatePresence>
              </div>

              {/* content */}
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
                      <br/>
                      <br/>
                    <div className={`lineup ${opened ? event.bg : null}`}  style={{ paddingBottom: !event.link ? "1rem" : undefined }}>
                      <div className={`circle-lineup ${opened ? event.bg : null}`}>
                        <p>Lineup</p>
                      </div>
                      <div className={`names ${opened ? event.bg : null}`}>
                        <p>{event.artist1}</p>
                        <p>{event.artist2}</p>
                        <p>{event.artist3}</p>
                        <p>{event.artist4}</p>
                        <p>{event?.artist5}</p>                        
                      </div>
                    </div>
                    {event.link &&
                      <div className={`link ${opened ? event.bg : null}`}>
                        <a href={event.link} target="blank">{event.linktext}</a>
                      </div>
                    }
                    {/* <div className="parternship">
                      <p>{event.help}</p>
                    </div> */}
                    
                  </motion.div>
                  </>
                )}
              </AnimatePresence>

              {/* affiche */}
              {/* { !isMobile &&
              
              (
                <AnimatePresence initial={false}>
                  {hovered && (
                  <>
                  <motion.img
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0}}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{ 
                          position: "absolute",
                          top: "220px",
                          right: "20px", 
                          width: "300px" }}
                      className={`affiche ${opened ? 'clicked' : null}`}
                      src={`${import.meta.env.BASE_URL}/images/${event.image}`}
                  />
                  <motion.img
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0 }}
                      exit={{ opacity: 0}}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className={`affiche2 ${opened ? 'clicked' : null}`}
                      src={`${import.meta.env.BASE_URL}/images/${event.affiche2}`}
                  />
                  </>
                  )}
              </AnimatePresence>
              )} */}

              {/* éléments graphiques */}
              <AnimatePresence initial={false}>
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
                    src={`${import.meta.env.BASE_URL}/images/${event?.element1}`}
                />
                )}
              </AnimatePresence>
              {/* <AnimatePresence initial={false}>
                {hovered && event.element2 && (
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ overflow: "hidden",
                        position: "absolute",
                        top: `${randomPos[event.id]?.y ?? 50}%`,
                        left: `${randomPos[event.id]?.x ?? 50}%`,
                        width: event.width2 }}
                    className={`element2`}
                    src={`${import.meta.env.BASE_URL}/images/${event?.element2}`}
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