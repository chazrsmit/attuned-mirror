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
            <div>
                <div>
                    <button onClick={() => navigate('/')}>X</button>
                </div>
                <div>
                    <h2>{event.title}</h2>
                </div>
                <div className="description-wrapper">
                        <div className="description">
                            <p>{event.content}</p>
                        </div>
                    </div>
            </div>
        </motion.div>
        </>
    )
}