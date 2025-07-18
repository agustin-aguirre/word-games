import { useEffect, useState } from "react";
import { motion } from "motion/react";
import usePlayerRoundStore from "../../stores/playerRound";


function WordDisplay({word, forceShow}) {
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

    const display = (word) => {

        if (forceShow && !hasEntered) {
            return (
                <span 
                animate={{
                    color: ["#ffffff", "#9f0712"]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity
                }}
                >
                    {word}
                </span>
            )

        }
        return <span>{hasEntered ? word : "_".repeat(word.length)}</span>
        
    }

    return (
        <motion.div {...animProps()} >
            {display(word)}
        </motion.div>
    );
}


export default WordDisplay;