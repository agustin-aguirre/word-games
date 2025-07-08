import usePlayerInputStore from "../../stores/playerInputs";
import CharButton from "./CharButton";


export default function InputPanelCharButton({ id, value, onClick }) {

    const currentInputs = usePlayerInputStore(state => state.inputs);

    return (
        <CharButton key={id}
        id={id}
        value={value}
        isVisible={!currentInputs.map(input => input.id).includes(id)}
        onClick={onClick}
        />
    );
}