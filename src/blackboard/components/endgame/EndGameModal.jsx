import { motion } from "motion/react";
import "./endgame-modal.css";


function EndGameModal({show}) {
    if (show || true)
        return (
            <motion.div 
            className="endgame-message" 
            key="box"
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }}
            >
                Game Finished
            </motion.div>
        );
}


export default EndGameModal;