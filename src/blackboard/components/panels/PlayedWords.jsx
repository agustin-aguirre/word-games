import RoundWordsGridDisplay from "../displays/RoundWordsGridDisplay";
import ChalkboardPanel from "./ChalkboardPanel";


function PlayedWords() {
    return (
        <ChalkboardPanel className="rounded-2xl shadow-2xl">
            <RoundWordsGridDisplay showAllWords={false} />
        </ChalkboardPanel>
    );
}


export default PlayedWords;