import useRoundConfigStore from "../../stores/roundConfig";
import WordDisplay from "./WordDisplay";

function RoundWordsGridDisplay({showAllWords}) {

    const allowedWords = useRoundConfigStore(state => state.allowedWords);

    const renderWordList = (wordsGroup) => {
        const makeKey = (index) => `PlayedWord-${index}`;
        return wordsGroup.map((word, index) => 
            <li key={makeKey(index)}>
                <WordDisplay word={word} forceShow={showAllWords}/>
            </li>
        )
    }

    return (
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
    )
}


export default RoundWordsGridDisplay;