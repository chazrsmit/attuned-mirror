import './Listing.css'
import { motion, AnimatePresence } from "framer-motion"

export default function Listing({ isClicked, setIsClicked }) {

    return (
        <>
            <div className="listing">
                {/* Mona sept 26 */}
                <motion.div
                    layout
                    className={`block ${isClicked === "sept26mona" ? 'opened' : null}`}
                    transition={{
                        layout: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                    }}
                    animate={{
                        height: isClicked === "sept26mona" ? "101vh" : "22dvh"
                        }}
                >
                    <div className="div-titre"     onClick={() =>
                            isClicked === "sept26mona"
                                ? setIsClicked(null)
                                : setIsClicked("sept26mona")
                        }>
                        <h2 className="titre">Attuned & Blackhill Soundsystem for Zone Neutre collective</h2>
                    </div>
                    <div className="infos">
                        <p>6 September 2026 @Mona</p>
                        <p className="upcoming">upcoming</p>
                    </div>
                    {/* on ajoute un AnimatePresence comme il arrive après (enter and exit anim) */}
                    <AnimatePresence>
                        {isClicked === "sept26mona" ? (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.15 }}
                                style={{ overflow: "hidden" }}
                            >
                                <p>texte complémentaire Mona</p>
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                </motion.div>
                {/* LaVallée nov 25 */}
                <div className="block">
                    <div className="div-titre" onClick={() => {isClicked !== "nov25lav" || isClicked === null ? setIsClicked("nov25lav") : setIsClicked(null)}}>
                        <h2 className="titre">Attuned & Boom Café for Casalina</h2>
                    </div>
                    <div className="infos">
                        <p>29 November 2025 @LaVallée</p>
                    </div>
                    {isClicked === "nov25lav" ? (
                        <div>
                            <p>texte complémentaire Mona</p>
                        </div>
                    ) : null}
                </div>
                {/* LaVallée may 25 */}
                <div className="block">
                    <h2 className="titre">Attuned & La Vieille Chéchette for Sharefood</h2>
                    <p>25 May 2025 @LaVallée</p>
                </div>
                {/* LaVallée nov 24 */}
                <div className="block">
                    <h2 className="titre">Attuned & Boom Café for Getting the voice out</h2>
                    <p>15 November 2024 @LaVallée</p>
                </div>
                {/* Zsenne Bar june 24 */}
                <div className="block">
                    <h2 className="titre">Attuned for 100pap's 3rd bday</h2>
                    <p>7 June 2024 @Zsenne Bar</p>
                </div>
                {/* Antidote oct 23 */}
                <div className="block">
                    <h2 className="titre">Attuned & 100pap for La Voix des sans papiers</h2>
                    <p>25 October 2023 @L'Antidote</p>
                </div>
            </div>
        </>
    )
}