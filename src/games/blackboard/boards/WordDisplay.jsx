function WordDisplay({word, hidden}) {
    return (
        <div>
            <span>{hidden ? "_".repeat(word.length) : word}</span>
        </div>
    );
}


export default WordDisplay;