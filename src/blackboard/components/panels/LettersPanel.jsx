import LetterButton from "../buttons/LetterButton";


function LettersPanel({ displayedLetters }) {
    return (
        <div>
            {
                displayedLetters.map((letter, index) => (
                    <LetterButton 
                    key={index}
                    id={index} 
                    letter={letter} 
                    onClick={(id, letter) => console.log(letter)}
                    />
                ))
            }
        </div>
    )
}


export default LettersPanel;