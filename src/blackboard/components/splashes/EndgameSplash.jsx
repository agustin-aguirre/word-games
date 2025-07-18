import { motion } from "motion/react";
import RoundWordsDisplay from "../displays/RoundWordsGridDisplay";


function EndgameSplash({show}) {

    // if (!(show || true)) return;
    if (!show) return;

    return (
        <motion.div 
            className="bg-emerald-800 text-white p-7 rounded-2xl z-11" 
            initial={{scale: 0, opacity:0}} 
            animate={{scale: 1, opacity:1}}
            >
                <div className="w-full flex justify-center items-center pb-5">
                    <h2 className="flex cantata-one-regular text-2xl">
                        Partida completa
                    </h2>
                </div>
                <div>
                    <RoundWordsDisplay showAllWords={true}/>
                </div>
        </motion.div>
    );
}


export default EndgameSplash;