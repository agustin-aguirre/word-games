import { motion } from "motion/react";


function EndgameSplash({show}) {
    if (!show) return;

    return (
        <div className="z-10 h-full w-full absolute">
            <motion.div 
            className="bg-emerald-800 text-white p-7 rounded-2xl w-8/9 h-4/7 center" 
            initial={{scale: 0, opacity:0}} 
            animate={{scale: 1, opacity:1}}
            >
                <div className="w-full flex justify-center items-center pb-5">
                    <h2 className="flex cantata-one-regular">
                        FINISHED
                    </h2>
                </div>
                <div className="bg-amber-50 p-7 block">

                </div>
            </motion.div>
        </div>
    );
}


export default EndgameSplash;