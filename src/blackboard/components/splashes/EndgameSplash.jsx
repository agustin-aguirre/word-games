import { motion } from "motion/react";
import "./endgame-splash.css";


function EndgameSplash({show}) {
    if (!show) return;
    
    return (
        <motion.div className="endgame-splash" initial={{scale: 0}} animate={{scale: 1}}>
            FINSHED
        </motion.div>
    );
}


export default EndgameSplash;