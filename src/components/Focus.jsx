import "./Focus.css"
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion";

export default function Focus({ events }) {

    const navigate = useNavigate()
    const { id } = useParams()
    const event = events.find(event => id === event.id)

    if (!event) return null

    return(
        <>
        <motion.div className="focusss"
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
                }}
        >
            <button onClick={() => navigate('/')} className="btn-x">X</button>
            <div className="focus-content">
                {/* button
                <div className="btn">
                    <button onClick={() => navigate('/')} className="btn-x">X</button>
                </div> */}
                {/* middle */}
                <div className="middle">
                    {/* colonne gauche */}
                    <div className="left">
                        <div className="inner-text">
                            <div>
                                <h2>{event.title}</h2>
                            </div>
                            <div className="description-wrapper">
                                    <div className="description">
                                        <p>{event.content}</p>
                                    </div>
                            </div>
                        </div>
                        <div className={` `}>
                        <p>Lineup</p>
                      </div>
                      <div className={`names`}>
                        <p>{event.artist1}</p>
                        <p>{event.artist2}</p>
                        <p>{event.artist3}</p>
                        <p>{event.artist4}</p>
                        <p>{event?.artist5}</p>                        
                      </div>
                        {/* bottom line */}
                        <div className="bottom">
                            <p>texte ici</p>
                        </div>
                    </div>
                    {/* colonne droite avec photos */}
                    <div className="right">
                        <div className="photo-wrapper">
                            <img src={`/images/events/${event.imageEvent1}`}/>
                        </div>
                        <div className="photo-wrapper">
                            <img src={`/images/events/${event.imageEvent2}`}/>
                        </div>
                        <div className="photo-wrapper">
                            <img src={`/images/events/${event.imageEvent3}`}/>
                        </div>
                        <div className="photo-wrapper">
                            <img src={`/images/events/${event.imageEvent4}`}/>
                        </div>
                    </div>
                </div>
            </div>
            
        </motion.div>
        </>
    )
}