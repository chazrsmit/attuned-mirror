import './LeftDesktop.css'

export default function LeftDesktop({ isClicked, setIsClicked }) {

    return (
        <>
            <div className="left-desktop">
                <div className="left-content">
                    <p>
                        <span>Attuned</span> is a non-profit association based in Brussels that organises <span>benefit parties</span> to raise funds for social causes. Since its inception in 2023, Attuned has managed to raise over <span>5000€</span> for collectives and associations working within the human rights and agroecological spheres.
                    </p>
                    <div className="buttons">
                        <button>contact us</button>
                        <button>instagram</button>
                    </div>
                </div>
                <div className="all-editions">
                    <p className={`all ${isClicked ? 'clicked' : null}`}>All editions</p>
                    <p className={`focus ${isClicked ? 'clicked' : null}`}>Titre</p>
                    {/* <img src={`./images/element-12.png`} /> */}
                </div>
            </div>
        </>
    )
}