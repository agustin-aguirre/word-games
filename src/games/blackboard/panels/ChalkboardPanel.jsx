import "./board-panel-styles.css";


function ChalkboardPanel(props) {
    const newProps = {...props}
    const className = props.className;
    delete newProps.className;

    return (
        <div className={`chalkboard-panel ${className}`} {...newProps}>
            {props.children}
        </div>
    );
}


export default ChalkboardPanel;