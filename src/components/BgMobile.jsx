import './ListingBis.css'
import './BgMobile.css'

export default function BgMobile({ events }) {

    return(
        <>
            <div className="listing-bis bg">
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
                                        <img
                                            className={`bgImage`}
                                            src={`/images/homepage/${event.bgImage}`}
                                        />
                                </div>
                            </div>

                )})}
            </div>
        
        </>
    )
}