import { motion } from "motion/react";


function Cooldown({children}) {
    return (
        <motion.div 
            animate={{ color: ["#FFB900", "#FFB900", "#FFB900", "#FFFFFF"] }}
            transition={{ duration: 2.5 }}
        >
            {children}
        </motion.div>
    );
}

export default Cooldown;