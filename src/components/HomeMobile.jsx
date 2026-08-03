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

    // const [credits, setCredits] = useState(null)
    const [panel, setPanel] = useState(null)

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
                                    {!isOpen && !panel &&
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
            
            {/* What is Attuned? */}
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
                        key={`whatisattuned`}
                        initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                        animate={{ opacity: 1, x:0,filter: "blur(0px)", filter: panel ? "blur(18px)" : "blur(0px)" }}
                        exit={{ opacity: 0, x: -20,filter: "blur(8px)" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ pointerEvents: panel ? "none" : "auto" }}
                    >
                        <a onClick={() => setIsOpen(true)}>What is Attuned?</a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Panel - links and credits */}
            <AnimatePresence inital={true}>
                { panel === 'credits' ? 
                    <motion.div
                        key="creditsmobile"
                        initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                        animate={{ opacity: 1, x:0,filter: "blur(0px)", filter: isOpen ? "blur(18px)" : "blur(0px)" }}
                        exit={{ opacity: 0, x: -20,filter: "blur(8px)" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ pointerEvents: isOpen ? "none" : "auto" }}
                        className="credits-mobile"
                    >
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The fonts used on this website were created by <a href="https://typotheque.genderfluid.space" target="blank">Bye Bye Binary</a>, a French-Belgian type library that "compiles and distributes a collection of post-binary typefaces created through an activist and feminist lens, to be used by as many people as possible".
                        The fonts in question are: <a href="https://typotheque.genderfluid.space/fr/fontes/picnic" target="blank">PicNic</a> and <a href="https://typotheque.genderfluid.space/fr/fontes/bbb-karrik" target="blank">BBB Karrik</a>.
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The website was designed and coded by <a href="" target="blank">Charlotte Smit</a>.
                        <br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Attuned was founded by Serafina Cutaia, Soukeyna Latrach, Charlotte Smit, Fabian Fuchs and Paul Bossu.</p>
                        <a onClick={() => setPanel('links')}>(close)</a>
                    </motion.div>
                    :
                    panel === 'links' ? (
                    <motion.div
                        key="linksmobile"
                        initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                        animate={{ opacity: 1, x: 0, filter: isOpen ? "blur(18px)" : "blur(0px)" }}
                        exit={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ pointerEvents: isOpen ? "none" : "auto" }}
                        className="links-mobile"
                    >
                        <a href="https://www.instagram.com/attuned_collective/" target="blank">Instagram</a>    
                        <a href="" target="blank">Facebook</a>
                        <a onClick={() => setPanel('credits')}>Credits</a>
                        <a href="" target="blank">Collaborate with us</a><br/>
                        <a onClick={() => setPanel(null)}>(close)</a>
                    </motion.div>)
                    :
                    (<motion.div
                        key="openlinksmobile"
                        initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                        animate={{ opacity: 1, x: 0, filter: isOpen ? "blur(18px)" : "blur(0px)" }}
                        exit={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ pointerEvents: isOpen ? "none" : "auto" }}
                        className="open-links-mobile"
                    >
                        <a onClick={() => setPanel('links')}>Links</a>
                    </motion.div>
                    )}
            </AnimatePresence>

            {/* Links social media */}
            {/* <motion.div
                // key="links"
                // initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                // animate={{ opacity: 1, x:0,filter: "blur(0px)"  }}
                // exit={{ opacity: 0, x: -20,filter: "blur(8px)" }}
                // transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`socials ${credits || isOpen ? 'blur' : null}`}
            >
                <a href="https://www.instagram.com/attuned_collective/" target="blank">Instagram</a>
                <a href="https://www.instagram.com/attuned_collective/" target="blank">Contact</a>
            </motion.div> */}
        </>
    )
}