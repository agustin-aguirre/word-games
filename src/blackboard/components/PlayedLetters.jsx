function PlayedLetters({played, all}) {
    return <>
        <div>
            <ul>
                {all.filter(letter => !played.includes(letter)).map(letter => {
                    return <li>{letter}</li>
                })}
            </ul>
        </div>
    </>
}


export default PlayedLetters;