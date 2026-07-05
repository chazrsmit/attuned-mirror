import './Listing.css'

export default function Listing() {

    return (
        <>
            <div className="listing">
                <div className="block">
                    <p className="upcoming">upcoming</p>
                    <h2 className="titre">Attuned & Blackhill Soundsystem for Zone Neutre collective</h2>
                    <p>6 September 2026 @Mona</p>
                </div>
                <div className="block">
                    <h2 className="titre">Attuned & Boom Café for Getting the Voice Out</h2>
                    <p>21 November 2025 @LaVallée</p>
                </div>
                <div className="block">
                    <h2 className="titre">Attuned & La Vieille Chéchette for Sharefood</h2>
                    <p>25 May 2025 @LaVallée</p>
                </div>
                <div className="block">
                    <h2 className="titre">Attuned & Boom Café for Getting the voice out</h2>
                    <p>21 November 2024 @LaVallée</p>
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