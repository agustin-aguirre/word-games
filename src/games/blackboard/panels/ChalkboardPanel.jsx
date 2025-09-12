import "./board-panel-styles.css";


function BoardPanel({children, ...props}) {
    return (
        <div className="chalkboard-panel cabin-sketch-regular">
            <div>
                {children}
            </div>
        </div>
    );
}