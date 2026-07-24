import './LeftDesktop.css'
import { motion, AnimatePresence } from "framer-motion";

export default function LeftDesktop({ events, isClicked, setIsClicked, listingOn }) {

    const clickedEvent = events.find(event => event.id === isClicked)

    return (
        <>
            <div className="left-desktop">
                {/* <div className="left-content">
                    <p>
                        <span>Attuned</span> is a non-profit association based in Brussels that organises <span>benefit parties</span> to raise funds for social causes. Since its inception in 2023, Attuned has managed to raise over <span>5000€</span> for local collectives and associations working within the human rights and agroecological spheres.
                    </p>
                    <div className="buttons">
                        <button>contact us</button>
                        <button>instagram</button>
                    </div>
                </div> */}
                <div className="explanation">
                    <p className="one">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Attuned</span> is a non-profit association based in Brussels that organises <span>benefit parties</span> to raise funds for social causes. Since its inception in 2023, Attuned has managed to raise over <span>6000€</span> over the course of 6 parties for various local organisations working within the human rights and agroecological spheres.
                    </p>
                    {/* <p className="one">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Attuned is a non-profit association based in <span>Brussels</span>
                    </p>
                    <p className="two">
                        that organises benefit parties to raise
                    </p>
                    <p className="two-bis">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;funds for social causes.
                    </p>
                    <p className="three">
                        Since its inception in 2023, it   
                    </p>
                    <p className="four">
                         has managed to raise over <span>5000€</span>
                    </p>
                    <p className="five">
                         for local collectives and associations
                    </p>
                    <p className="six">
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;working within the human rights and agroecological spheres.
                    </p> */}
                    
                </div>
                {listingOn &&
                                <div className="all-editions">
                    <AnimatePresence initiale={false} mode="wait">
                        {clickedEvent ? (
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
                                All editions
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
                }
            </div>
        </>
    )
}