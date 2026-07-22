import './ListingBis.css'
import { motion, AnimatePresence } from "framer-motion";

export default function ListingBis({events, isClicked, setIsClicked, isHovered, setIsHovered, titleHovered, setTitleHovered, isMobile}) {

    return(
        <>
            <motion.div className="listing-bis"
                                                  initial={{
                                          opacity: 0
                                      }}
                                      animate={{
                                          opacity: 1
                                      }}
                                      exit={{
                                          opacity: 0
                                      }}
                                      transition={{
                                          duration: 0.3,
                                          ease: "easeInOut"
                                      }}>
                {events.map(event => (
                    <motion.div
                        key={event.id}
                        style={{ overflow: "hidden",
                            position: "absolute",
                            top:  event.topBg,
                            left: event.leftBg,
                             }}
                        className="wrapping-div"
                    >
                        <div style={{position: "relative"}}>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    whileHover={{opacity:0}}
                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                    className={`title-center ${event.bgColor? event.bgColor : null}`}
                                    style={{position: "absolute", top: "50%", left:"50%", transform: "translate(-50%, -50%)"}}
                                    onMouseEnter={() => setTitleHovered(event.title)}
                                    onMouseLeave={() => setTitleHovered(null)}
                                >
                                    {event.title}
                                </motion.p>
                                <motion.img
                                    key={event.id}
                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                    style={{ overflow: "hidden", width: isMobile? '200px' : '340px' }}
                                    className={`bgImage`}
                                    src={`/images/homepage/${event.bgImage}`}
                            />
                        </div>
                    </motion.div>

                ))}

            </motion.div>
        </>
    )
}