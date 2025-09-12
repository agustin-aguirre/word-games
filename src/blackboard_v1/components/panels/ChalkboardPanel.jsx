import chalkboardTexture from "../../../../assets/chalkboard-texture.svg";

function ChalkboardPanel(props) {
    return (
        <div className={`bg-emerald-800 relative text-white ${props.className}`}>
            <div
                className={`rounded-2xl absolute inset-0 bg-cover bg-repeat pointer-events-none`}
                style={{ backgroundImage: `url(${chalkboardTexture})`, opacity: `${props.opacity ?? 40}%` }}
            ></div>
            <div className="relative z-10 text-white cabin-sketch-regular">
                {props.children}
            </div>
        </div>
  );
}


export default ChalkboardPanel;