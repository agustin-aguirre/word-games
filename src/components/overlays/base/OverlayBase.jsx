import "./overlay-base-styles.css";


function OverlayBase({style, className, children}) {
    
    return (
        <div 
            className={`overlay-base ${className || ''}`} 
            style={style || {}}
        >
            {children}
        </div>
    )
}


export default OverlayBase;