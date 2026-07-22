import './LeftDesktop.css'
import { motion, AnimatePresence } from "framer-motion";

export default function LeftDesktop({ events, isClicked, setIsClicked }) {

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
                {/* <div className="all-editions">
                    <AnimatePresence mode="wait">
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
                </div> */}
            </div>
        </>
    )
}