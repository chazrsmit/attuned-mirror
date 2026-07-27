import './LeftDesktop.css'
import { motion, AnimatePresence } from "framer-motion"
import {useState} from "react"

export default function LeftDesktop({ events, isClicked, setIsClicked, listingOn }) {

    const clickedEvent = events.find(event => event.id === isClicked)
    const [credits, setCredits] = useState(null)

    return (
        <>
            <div className="left-desktop">
                <AnimatePresence mode="wait">
    {credits ? (
        <motion.div
            key="credits"
            layout
            className="credits"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y:0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
        >
            <p>credits</p>
            <button onClick={() => setCredits(false)}>close</button>
        </motion.div>
    ) : (
        <motion.div
            key="collaborate"
            layout
            className="btn-collaborate"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x:0 }}
            exit={{ opacity: 0, x:-20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
        >
            <a href="mailto:attuned.collectif@proton.me"><button>Wanna collaborate?</button></a>
            <div><a href="https://www.facebook.com/attunedbxl/" target="blank">Facebook</a></div>
            <div><a href="https://www.instagram.com/attuned_collective/" target="blank">Instagram</a></div>
            <div><a onClick={() => setCredits(true)}>Credits</a></div>
        </motion.div>
    )}
</AnimatePresence>
                
            <AnimatePresence mode="wait">
            {
                location.pathname === "/" ?
                    <motion.div 
                        key="/"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="explanation"
                    >
                        <p className="one">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Attuned</span> is a non-profit association based in Brussels that organises <span>benefit parties</span> to raise funds for social causes. Since its inception in 2023, Attuned has managed to raise over <span>6000€</span> over the course of 6 parties for various local organisations working within the human rights and agroecological spheres.
                        </p>
                    </motion.div>
                :
                    <motion.div 
                        key={location.pathname}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="datebis"
                    >
                        <p className="">
                            {clickedEvent?.date}
                        </p>
                    </motion.div>
            }
            </AnimatePresence>
                {/* <div className="explanation">
                    <p className="one">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Attuned</span> is a non-profit association based in Brussels that organises <span>benefit parties</span> to raise funds for social causes. Since its inception in 2023, Attuned has managed to raise over <span>6000€</span> over the course of 6 parties for various local organisations working within the human rights and agroecological spheres.
                    </p>
                </div> */}
                        {/* button */}
                {/* <div className="btn-collaborate">
                    <div>
                        <button className="">Wanna collaborate?</button>
                    </div>
                </div> */}

                {/* {listingOn && */}
                {/* <div className="all-editions"> */}
                    <AnimatePresence initiale={false} mode="wait">
                        {/* {clickedEvent && (
                            <motion.p
                                key={clickedEvent.id}
                                className="focus"
                               initial={{
                                    opacity: 0,
                                    
                                    
                                }}
                                animate={{
                                    opacity: 1,
                                    
                                  
                                }}
                                exit={{
                                    opacity: 0,
                                    
                                  
                                }}
                                transition={{
                                    duration: 0.1,
                                    ease: "easeInOut"
                                }}
                            >
                                {clickedEvent.date}
                            </motion.p>
                        )} */}
                        {/* {clickedEvent ? (
                            <motion.p
                                key={clickedEvent.id}
                                className="focus"
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
                                {clickedEvent.title}
                            </motion.p>
                        ) : (
                            <motion.p
                                key="all"
                                className="all"
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
                                all editions
                            </motion.p> 
                        )} */}
                    </AnimatePresence>
                {/* </div> */}
                {/* } */}

            </div>

        </>
    )
}