import "./Focus.css"
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import Lenis from "lenis"
import { useRef, useEffect, useState } from 'react'

export default function Focus({ events, setIsClicked }) {

    // deux instances Lenis pour deux div séparées
    const leftRef = useRef(null)
    const rightRef = useRef(null)

    const navigate = useNavigate()
    const { id } = useParams()
    const event = events.find(event => id === event.id)

    const [position, getPosition] = useState({ x: 50, y: 50})

    function getRandomPosition(){
        const x = Math.random()*50
        const y = Math.random()*70

        return { x, y }
    }

    useEffect(() => {
        getPosition(getRandomPosition())
    }, [id])

        useEffect(() => {
            const leftContent = leftRef.current?.querySelector('.lenis-content')
            const rightContent = rightRef.current?.querySelector('.lenis-content')

            if (!leftContent || !rightContent) return

            const lenisLeft = new Lenis({
                wrapper: leftRef.current,
                content: leftContent,
                duration: 1,
                smoothWheel: true,
            })

            const lenisRight = new Lenis({
                wrapper: rightRef.current,
                content: rightContent,
                duration: 0.1,
                smoothWheel: true,
            })

            let rafId
            function raf(time) {
                lenisLeft.raf(time)
                lenisRight.raf(time)
                rafId = requestAnimationFrame(raf)
            }
            rafId = requestAnimationFrame(raf)

            return () => {
                lenisLeft.destroy()
                lenisRight.destroy()
                cancelAnimationFrame(rafId)
            }
        }, [id])

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
                duration: 0.25,
                ease: "easeInOut"
                }}
        >
            {/* bouton pour quitter */}
            <p onClick={() => {
                navigate('/')
                setIsClicked(null)
            }} className="btn-x">close</p>

            {/* background image */}
            <img className="bg-test" src={`/images/homepage/${event.bgImage2}`} style={{left: `${position.x}%`, top: `${position.y}%`}} />

            {/* content */}
            <div className="focus-content">
                {/* middle */}
                <div className="middle">
                    {/* colonne gauche */}
                    <div className="left">
                        <div ref={leftRef} className={`inner-text ${event.bgColor ? event.bgColor : null}`}>
                            <div className="lenis-content">
                                <div>
                                    <h2>{event.title}</h2>
                                </div>
                                {/* <div>
                                    <p>{event.date}</p>
                                </div> */}
                                <div className="description-wrapper">
                                    <div className="description">
                                        {event.content}
                                    </div>
                                </div>
                                {/* images - horizontal scroll on desktop */}
                                <div className="photos">
                                    {event.imageEvent1 &&
                                    
                                        <img className="img-1" src={`/images/events/${event.imageEvent1}`} loading="eager" fetchPriority="high"/>
                                   
                                    }
                                    {event.imageEvent2 &&
                                        <img className="img-2" src={`/images/events/${event.imageEvent2}`} loading="eager" fetchPriority="high"/>
                                    }
                                    {event.imageEvent3 &&
                                        <img className="img-3" src={`/images/events/${event.imageEvent3}`} loading="eager" fetchPriority="high"/>
                                    }
                                    {event.imageEvent4 &&
                                        <img className="img-4" src={`/images/events/${event.imageEvent4}`} loading="eager" fetchPriority="high"/>
                                    }
                                    {event.imageEvent5 &&
                                        <img className="img-5" src={`/images/events/${event.imageEvent5}`} loading="eager" fetchPriority="high"/>
                                    }
                                    {event.imageEvent6 &&
                                        <img className="img-6" src={`/images/events/${event.imageEvent6}`} loading="eager" fetchPriority="high"/>
                                    }
                                </div>
                                {/* <div>
                                    <p>Lineup</p>
                                </div>
                                <div className="names">
                                    <p>{event.artist1}</p>
                                    <p>{event.artist2}</p>
                                    <p>{event.artist3}</p>
                                    <p>{event.artist4}</p>
                                    <p>{event?.artist5}</p>
                                </div> */}
                            </div>
                        </div>

                        {/* bottom line */}
                        {/* <div className="bottom">
                            <p>{event.date}</p>
                        </div> */}
                    </div>

                    {/* colonne droite avec photos */}
                    <div className="right" ref={rightRef}>
                        <div className="lenis-content">
                                <div>
                                    <p>Lineup:</p>
                                </div>
                                <div className="names">
                                    <p>{event.artist1}</p>
                                    <p>{event.artist2}</p>
                                    <p>{event.artist3}</p>
                                    <p>{event.artist4}</p>
                                    <p>{event?.artist5}</p>
                                </div>
                            {/* {event.imageEvent1 &&
                            // <div className="photo-wrap">
                                <img className="img-1" src={`/images/events/${event.imageEvent1}`} loading="eager" fetchPriority="high"/>
                            // </div>
                            }
                            {event.imageEvent2 &&
                                <img className="img-2" src={`/images/events/${event.imageEvent2}`} loading="eager" fetchPriority="high"/>
                            }
                            {event.imageEvent3 &&
                                <img className="img-3" src={`/images/events/${event.imageEvent3}`} loading="eager" fetchPriority="high"/>
                            }
                            {event.imageEvent4 &&
                                <img className="img-4" src={`/images/events/${event.imageEvent4}`} loading="eager" fetchPriority="high"/>
                            }
                            {event.imageEvent5 &&
                                <img className="img-5" src={`/images/events/${event.imageEvent5}`} loading="eager" fetchPriority="high"/>
                            }
                            {event.imageEvent6 &&
                                <img className="img-6" src={`/images/events/${event.imageEvent6}`} loading="eager" fetchPriority="high"/>
                            } */}
                        </div>
                    </div>
                </div>
            </div>

        </motion.div>
        </>
    )
}