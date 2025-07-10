import useRoundConfigStore from "../../stores/roundConfig";
import WordDisplay from "../displays/WordDisplay";
import ChalkboardPanel from "./ChalkboardPanel";


function PlayedWords() {
    
    const allowedWords = useRoundConfigStore(state => state.allowedWords);

    const renderWordList = (wordsGroup) => {
        const makeKey = (index) => `PlayedWord-${index}`;
        return wordsGroup.map((word, index) => 
            <li key={makeKey(index)}>
                <WordDisplay word={word}/>
            </li>
        )
    }



    return (
        <ChalkboardPanel>
            <div className="pt-3 px-4 pb-3 flex justify-between tracking-widest text-xl-2xl">
                {
                    Object.keys(allowedWords).map((length) => (
                        <ul key={`PlayedWords-Group-${length}`}>
                            {renderWordList(allowedWords[length])}
                        </ul>
                    ))
                }
            </div>
        </ChalkboardPanel>
    );
}


export default PlayedWords;