import './ListingBis.css'
import { motion, AnimatePresence } from "framer-motion";

export default function ListingBis({events, isClicked, setIsClicked, isHovered, setIsHovered, titleHovered, setTitleHovered, isMobile}) {

    return(
        <>
            <div className="listing-bis">
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
                                    ransition={{ duration: 0.25, ease: "easeInOut" }}
                                    className={`title-center ${event.bgColor? event.bgColor : null}`}
                                    style={{position: "absolute", top: "50%", left:"50%", transform: "translate(-50%, -50%)"}}
                                >
                                    {event.title}
                                </motion.p>
                                <motion.img
                                    key={event.id}
                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                    style={{ overflow: "hidden", width: isMobile? '200px' : '360px' }}
                                    className={`bgImage`}
                                    src={`/images/homepage/${event.bgImage}`}
                            />
                        </div>
                    </motion.div>

                ))}

            </div>
        </>
    )
}