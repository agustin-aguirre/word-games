import OverlayBase from "../base/OverlayBase";
import "./game-overlay-styles.css";


function GameOverlay({children}) {
    return (
        <OverlayBase className="game-overlay">
            <div className="game-display">
                {children}
            </div>
        </OverlayBase>
    );
}


export default GameOverlay;