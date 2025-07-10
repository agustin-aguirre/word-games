import { useEffect, useState } from "react";
import { motion } from "motion/react";
import usePlayerRoundStore from "../../stores/playerRound";


function WordDisplay({word}) {
    const enteredWords = usePlayerRoundStore(state => state.enteredWords);
    const [hasEntered, setHasEntered] = useState(false);
    
    useEffect(() => {
        if (!hasEntered) {
            setHasEntered((enteredWords[word.length] ?? []).includes(word));
        }
    }, [enteredWords, hasEntered])

    const animProps = () => {
        if (!hasEntered) return {}
        return {
            animate:{ color: ["#FFB900", "#FFB900", "#FFB900", "#FFFFFF"] },
            transition:{ duration: 2.5 }
        }
    }

    return (
        <motion.div
        {...animProps()}
        >
            <span>{hasEntered ? word : "_".repeat(word.length)}</span>
        </motion.div>
    );
}


export default WordDisplay;