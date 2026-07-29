import './HomeMobile.css'
import { motion, AnimatePresence } from "framer-motion"


export default function HomeMobile() {

    return(
        <>
            <motion.div className="home-mobile"
                key="homeMobile"
                layout
                initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                animate={{ opacity: 1, x:0,filter: "blur(0px)"  }}
                exit={{ opacity: 0, x: -20,filter: "blur(8px)" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Attuned</span> is a non-profit association based in Brussels that organises <span>benefit parties</span> to raise funds for social causes. Since its inception in 2023, Attuned has managed to raise over <span>6000€</span> over the course of 6 parties for various local organisations working within the human rights and agroecological spheres.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It places at the center of its organisation the principles of partnership and of circular economy, taking to heart the blooming of meaningful and lasting collaborations with local partners.</p>
            </motion.div>
        </>
    )
}