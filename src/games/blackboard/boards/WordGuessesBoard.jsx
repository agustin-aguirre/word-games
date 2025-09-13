import ChalkboardPanel from "../panels/ChalkboardPanel";
import WordDisplay from "./WordDisplay";


function WordGuessesBoard({ allowedWords, showAllWords }) {

    const layout = {
        display: "grid",
        gap: "0.75rem",
        paddingRight: "1rem",
        paddingTop: "1.5rem",
        paddingBottom: "2rem",
        letterSpacing: "0.1em",
        fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
        gridTemplateColumns: "repeat(4, 1fr)",
    }

    return (
        <ChalkboardPanel>
            <div style={layout} >
                {
                    Object.keys(allowedWords).map((length) => (
                        <div style={{ gridColumn: "span 1 / span 1", textAlign: "center", }} >
                            <ol key={`PlayedWords-Group-${length}`} style={{ display: "grid", gap: "0.5rem" }} >
                                {
                                    allowedWords[length].map((word, index) =>
                                        <li key={`PlayedWord-${index}`}>
                                            <WordDisplay word={word} forceShow={showAllWords} />
                                        </li>
                                    )
                                }
                            </ol>
                        </div>
                    ))
                }
            </div>
        </ChalkboardPanel>
    );
}


export default WordGuessesBoard;