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
        <ChalkboardPanel className="rounded-2xl shadow-2xl">
            <div 
            className="grid gap-3 pr-4 pt-6 pb-8 tracking-widest text-xl-2xl"
            style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
            >
                {
                    Object.keys(allowedWords).map((length) => (
                        <div className="col-span-1 text-center" >
                            <ol key={`PlayedWords-Group-${length}`} className="grid gap-2" >
                                {renderWordList(allowedWords[length])}
                            </ol>
                        </div>
                    ))
                }
            </div>
        </ChalkboardPanel>
    );
}


export default PlayedWords;