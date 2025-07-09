import usePlayerRoundStore from "../../stores/playerRound";
import useRoundConfigStore from "../../stores/roundConfig";


function PlayedWords() {

    const enteredWords = usePlayerRoundStore(state => state.enteredWords);
    const allowedWords = useRoundConfigStore(state => state.allowedWords);


    const PlayedWordsGroup = ({played, all}) => {
        const PlayedWordDisplay = ({word, isPlayed}) => <li>{isPlayed? word : "_".repeat(word.length)}</li>;
        return (
            <ul>
                {all.map((word, index) => 
                    <PlayedWordDisplay
                    key={index} 
                    word={word} 
                    isPlayed={played.includes(word)} 
                />)}
            </ul>
        );
    }

    return (
        <div className={
            `flex justify-between pt-2 px-5 pb-5 
            rounded-2xl shadow-2xl
            tracking-widest bg-emerald-800
            text-white cabin-sketch-regular
            `}>
            {
                Object.keys(allowedWords).map((length, index) => {
                    return (
                        <div key={index} className="">
                            <PlayedWordsGroup
                            played={enteredWords[length] || []}
                            all={allowedWords[length]}
                            />
                        </div>
                    );
                })
            }
        </div>
    );
}


export default PlayedWords;