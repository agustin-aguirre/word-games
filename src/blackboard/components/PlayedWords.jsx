import "./played-words.css";


function PlayedWords({played, all}) {

    const PlayedWordDisplay = ({word, isPlayed}) => {
        return <li>{isPlayed? word : "_ ".repeat(word.length)}</li>
    }

    const PlayedWordsGroup = ({played, all}) => {
        return (
            <ul>
                {all.map(word => 
                    <PlayedWordDisplay 
                    word={word} 
                    isPlayed={played.includes(word)} 
                />)}
            </ul>
        );
    }

    return (
        <div className="all-played-words-container">
            {
                Object.keys(all).map(length => {
                    return (
                        <div className="played-words-group">
                            <PlayedWordsGroup
                            played={played[length]}
                            all={all[length]}
                            />
                        </div>
                    );
                })
            }
        </div>
    );
}


export default PlayedWords;