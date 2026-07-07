import "./Listing.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Listing({ isClicked, setIsClicked }) {
  const events = [
    {
      id: "sept26mona",
      title: "Attuned & Blackhill Soundsystem for Zone Neutre collective",
      date: "6 September 2026 @Mona",
      upcoming: true,
      content: (
        <>
          <p>texte complémentaire Mona</p>
        </>
      ),
    },
    {
      id: "nov25lav",
      title: "Attuned & Boom Café for Casalina",
      date: "29 November 2025 @LaVallée",
      upcoming: false,
      content: (
        <>
          <p>texte complémentaire LaVallée</p>
        </>
      ),
    },
    {
      id: "may25lav",
      title: "Attuned & La Vieille Chéchette for Sharefood",
      date: "25 May 2025 @LaVallée",
      upcoming: false,
      content: (
        <>
          <p>texte complémentaire Sharefood</p>
        </>
      ),
    },
    {
      id: "nov24lav",
      title: "Attuned & Boom Café for Getting the voice out",
      date: "15 November 2024 @LaVallée",
      upcoming: false,
      content: (
        <>
          <p>texte complémentaire Getting the Voice Out</p>
        </>
      ),
    },
    {
      id: "june24zsenne",
      title: "Attuned for 100pap's 3rd bday",
      date: "7 June 2024 @Zsenne Bar",
      upcoming: false,
      content: (
        <>
          <p>texte complémentaire Zsenne</p>
        </>
      ),
    },
    {
      id: "oct23antidote",
      title: "Attuned & 100pap for La Voix des sans papiers",
      date: "25 October 2023 @L'Antidote",
      upcoming: false,
      content: (
        <>
          <p>texte complémentaire Antidote</p>
        </>
      ),
    },
  ];

  return (
    <div className="listing">
      {events.map((event) => {
        const opened = isClicked === event.id;
        const anotherOpened = isClicked !== null && !opened;

        return (
          <motion.div
            key={event.id}
            layout
            className="block"
            transition={{
              layout: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            animate={{
              height: opened ? "100dvh" : anotherOpened ? 0 : "22dvh",
              minHeight: opened ? "100dvh" : anotherOpened ? 0 : "22dvh",
              opacity: anotherOpened ? 0 : 1,
              y: anotherOpened ? -40 : 0,
              paddingTop: anotherOpened ? 0 : 48,
              paddingBottom: anotherOpened ? 0 : 48,
              marginBottom: anotherOpened ? 0 : 0,
              borderTopWidth: anotherOpened ? 0 : 3,
            }}
            style={{
              overflow: "hidden",
            }}
          >
            <div
              className="div-titre"
              onClick={() =>
                opened ? setIsClicked(null) : setIsClicked(event.id)
              }
            >
              <h2 className="titre">{event.title}</h2>
            </div>

            <div className="infos">
              <p>{event.date}</p>

              {event.upcoming && (
                <p className="upcoming">upcoming</p>
              )}
            </div>

            <AnimatePresence>
              {opened && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  style={{
                    overflow: "hidden",
                  }}
                >
                  {event.content}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}