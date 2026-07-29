import './ListingBis.css'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Focus from './Focus'

export default function ListingBis({events, isClicked, setIsClicked, isHovered, setIsHovered, titleHovered, setTitleHovered, isMobile, isTablet}) {

    const [cursorDate, setCursorDate] = useState(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [cursorColor, setCursorColor] = useState(null);
    const navigate = useNavigate()

    return(
        <>
            <motion.div className="listing-bis"
                                    initial={{
                                          opacity: 0,
                                      }}
                                      animate={{
                                          opacity: 1
                                      }}
                                      exit={{
                                          opacity: 0
                                      }}
                                      transition={{
                                          duration: 0.2,
                                          ease: "easeInOut"
                                      }}>
                {events.map(event => {
        const leftPosition = isMobile
            ? event.leftBgMobile
            : isTablet
            ? event.leftBgTablet
            : event.leftBg
        const topPosition = isMobile
            ? event.topBgMobile
            : isTablet
            ? event.topBgTablet
            : event.topBg

        return (
                    <motion.div
                        key={event.id}
                        style={{ overflow: "hidden",
                            position: "absolute",
                            top:  topPosition,
                            left: leftPosition,
                             }}
                        className="wrapping-div"
                    >
                        <div style={{position: "relative"}}>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    whileHover={{opacity:0}}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    className={`title-center ${event.bgColor? event.bgColor : null}`}
                                    style={{position: "absolute", top: "50%", left:"50%", transform: "translate(-50%, -50%)"}}
                                    onMouseEnter={() => setTitleHovered(event.title)}
                                    onMouseLeave={() => {
                                        setTitleHovered(null);
                                        setCursorDate(null);
                                    }}
                                        onMouseMove={(e) => {
                                        setCursorDate(event.date);
                                        setCursorPos({ x: e.clientX, y: e.clientY });
                                        setCursorColor(event.bgColor);
                                    }}
                                    onClick={() => {
                                        navigate(`/event/${event.id}`)
                                        setTitleHovered(null)
                                        setIsClicked(event.id)
                                    }}
                                >
                                   {event.upcoming && (
                                    <p className="up"><span>upcoming</span></p>)}
                                    <p>{event.title}</p>
                                </motion.div>
                                <motion.img
                                    key={event.id}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    className={`bgImage`}
                                    src={`/images/homepage/${event.bgImage}`}
                                />
                        </div>
                    </motion.div>

                )})}

                {cursorDate && (
                    <div
                        style={{
                            position: 'fixed',
                            left: cursorPos.x + 14,
                            top: cursorPos.y + 14,
                            pointerEvents: 'none',
                            zIndex: 9999,
                        }}
                        className={`cursor-date-label ${cursorColor ? cursorColor : null}`}
                    >
                        {cursorDate}
                    </div>
                )}

            </motion.div>
        </>
    )
}