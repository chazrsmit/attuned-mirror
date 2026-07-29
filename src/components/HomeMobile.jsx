import './HomeMobile.css'
import OpenInfo from './OpenInfo'
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from 'react'
import Lenis from "lenis"
import { useNavigate, useParams } from 'react-router-dom'

// combien de temps entre les 2 clicks?
const CLICK_WINDOW = 1000 

export default function HomeMobile({ events, isClicked, setIsClicked, isOpen, setIsOpen }) {


    const navigate = useNavigate()

    // function pour gérer le click sur mobile
    function handleEventClick(id) {
        // si l'event a déjà été clické, on navigue vers la page focus
        if (isClicked === id) {
            navigate(`/event/${id}`)
        }
        else {
            setIsClicked(id)
        }
    }

    return(
        <>
            <div className="home-mobile">
                <div className="lenis-content">
                {events.map(event => {
                    return (
                            <div
                                key={event.id}
                                style={{ overflow: "hidden",
                                    position: "absolute",
                                    top:  event.topBgMobile,
                                    left: event.leftBgMobile,
                                    }}
                                className="wrapping-div"
                            >
                                <div style={{position: "relative"}}>
                                    {/* titre */}
                                    <AnimatePresence>
                                    {!isOpen &&
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className={`title-center ${event.bgColor? event.bgColor : null}`}
                                        style={{position: "absolute", top: "50%", left:"50%", transform: "translate(-50%, -50%)"}}
                                        onClick={() => handleEventClick(event.id)}
                                    >
                                    {event.upcoming && (
                                        <p className="up"><span>upcoming</span></p>)}
                                        <p>{event.title}</p>
                                    </motion.div>
                                    }
                                    </AnimatePresence>
                                    {/* image */}
                                    <img
                                        className={`bgImage`}
                                        src={`${import.meta.env.BASE_URL}/images/homepage/${event.bgImage}`}
                                    />
                                </div>
                            </div>

                )})}
                </div>
            </div>
            
            <AnimatePresence initial={true}>
                {/* mettre directement la condition dans le animatepresence et non dans le component sinon ça ne marche pas */}
                {isOpen ? 
                (
                    <OpenInfo isOpen={isOpen} setIsOpen={setIsOpen} />
                )
                :
                (
                    <motion.div
                        className="what-is-attuned"
                        key="whatisattuned"
                        initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                        animate={{ opacity: 1, x:0,filter: "blur(0px)"  }}
                        exit={{ opacity: 0, x: -20,filter: "blur(8px)" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <a onClick={() => setIsOpen(true)}>What is Attuned?</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}