import "./board-panel-styles.css";


function ChalkboardPanel({children, ...props}) {
    return (
        <div className="chalkboard-panel" {...props}>
            {children}
        </div>
    );
}


export default ChalkboardPanel;