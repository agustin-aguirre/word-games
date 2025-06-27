import "./played-letters.css";


function PlayedLetters({played, all}) {
    return <>
        <div className="played-letters-container">
            <ul>
                {all.map(letter => {
                    const alreadyPlayed = played.includes(letter);
                    const style = {
                        color: alreadyPlayed ? "transparent" : "inherit"
                    }
                    return <li style={{...style}}>{letter}</li>
                })}
            </ul>
        </div>
    </>
}


export default PlayedLetters;