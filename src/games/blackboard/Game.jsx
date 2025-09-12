import "./game-global-styles.css";


const layoutStyle = {
    width: "100%",
    display: "grid",
    gridTemlateColumns: "1fr",
    gridTemplateRows: "9fr 1fr",
    gridAutoFlow: "rows",
}

const boardStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "green"
}

const inputsStyle = {

}

function Game({ options }) {
    return (
        <div style={layoutStyle}>
            <div style={boardStyle}>

            </div>
            <div>

            </div>
        </div>
    )
}


export default Game;