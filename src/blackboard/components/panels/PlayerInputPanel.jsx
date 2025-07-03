import PlayerInput from "../inputs/PlayerInput";
import PlayedLetters from "../letters/PlayedLetters";


function PlayerInputPanel({onPlayerInput, onPlayerSubmitWord}) {
    return (
        <div className="rounded-2xl shadow-2xl cabin-sketch-bold bg-emerald-800 text-white">
            <PlayerInput
            onChange={onPlayerInput}
            onSubmit={onPlayerSubmitWord}
            />
            <PlayedLetters/>
        </div>
    )
}


export default PlayerInputPanel;