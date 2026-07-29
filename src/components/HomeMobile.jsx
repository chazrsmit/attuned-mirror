import './HomeMobile.css'
import OpenInfo from './OpenInfo'
import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react'

export default function HomeMobile({ events }) {

    const [isOpen, setIsOpen] = useState(true)

    return(
        <>
            <div className="home-mobile">
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
                                        <img
                                            className={`bgImage`}
                                            src={`/images/homepage/${event.bgImage}`}
                                        />
                                </div>
                            </div>

                )})}
            </div>
            
            <AnimatePresence>
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