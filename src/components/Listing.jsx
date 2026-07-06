import './Listing.css'

export default function Listing({ isClicked, setIsClicked }) {

    return (
        <>
            <div className="listing">
                <div className="block">
                    <div className="div-titre" onClick={() => {isClicked !== "sept26mona" || isClicked === null ? setIsClicked("sept26mona") : setIsClicked(null)}}>
                        <h2 className="titre">Attuned & Blackhill Soundsystem for Zone Neutre collective</h2>
                    </div>
                    <div className="infos">
                        <p>6 September 2026 @Mona</p>
                        <p className="upcoming">upcoming</p>
                    </div>
                    {isClicked === "sept26mona" ? (
                        <div>
                            <p>texte complémentaire</p>
                        </div>
                    ) : null}
                </div>
                <div className="block">
                    <h2 className="titre">Attuned & Boom Café for Casalina</h2>
                    <p>29 November 2025 @LaVallée</p>
                </div>
                <div className="block">
                    <h2 className="titre">Attuned & La Vieille Chéchette for Sharefood</h2>
                    <p>25 May 2025 @LaVallée</p>
                </div>
                <div className="block">
                    <h2 className="titre">Attuned & Boom Café for Getting the voice out</h2>
                    <p>15 November 2024 @LaVallée</p>
                </div>
                <div className="block">
                    <h2 className="titre">Attuned for 100pap's 3rd bday</h2>
                    <p>7 June 2024 @Zsenne Bar</p>
                </div>
                <div className="block">
                    <h2 className="titre">Attuned & 100pap for La Voix des sans papiers</h2>
                    <p>25 October 2023 @L'Antidote</p>
                </div>
            </div>
        </>
    )
}